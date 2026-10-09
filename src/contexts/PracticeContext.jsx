/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { generateId } from "../utils/id";

import {
  INITIAL_DATA,
  STORAGE_KEY,
  isValidPracticeData,
} from "../constants/practice";

const PracticeContext = createContext(null);

export function PracticeProvider({ children }) {
  const [data, setData, storageError] = useLocalStorage(
    STORAGE_KEY,
    INITIAL_DATA,
    isValidPracticeData,
  );

  function addQuestion(question) {
    // Create the ID outside the state updater to keep it pure.
    const newQuestion = {
      ...question,
      id: generateId(),
    };

    setData((current) => ({
      ...current,
      questions: [newQuestion, ...current.questions],
    }));
  }

  function updateQuestionStatus(id, status) {
    setData((current) => ({
      ...current,
      questions: current.questions.map((question) =>
        question.id === id ? { ...question, status } : question,
      ),
    }));
  }

  function deleteQuestion(id) {
    setData((current) => ({
      ...current,
      questions: current.questions.filter((question) => question.id !== id),
    }));
  }

  function updateMachineCodingStatus(status) {
    setData((current) => ({
      ...current,
      machineCodingStatus: status,
    }));
  }

  const value = {
    questions: data.questions,
    machineCodingStatus: data.machineCodingStatus,
    storageError,
    addQuestion,
    updateQuestionStatus,
    deleteQuestion,
    updateMachineCodingStatus,
  };

  return (
    <PracticeContext.Provider value={value}>
      {children}
    </PracticeContext.Provider>
  );
}

export function usePractice() {
  const context = useContext(PracticeContext);

  if (context === null) {
    throw new Error("usePractice must be used inside PracticeProvider");
  }

  return context;
}
