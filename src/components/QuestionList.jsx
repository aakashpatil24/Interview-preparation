import { useState } from "react";
import { INITIAL_FILTERS } from "../constants/practice";
import { usePractice } from "../contexts/PracticeContext";
import EmptyState from "./EmptyState";
import QuestionCard from "./QuestionCard";
import QuestionFilters from "./QuestionFilters";

export default function QuestionList() {
  const { questions } = usePractice();
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  function updateFilter(name, value) {
    setFilters((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function clearFilters() {
    setFilters({ ...INITIAL_FILTERS });
  }

  const searchTerm = filters.search.trim().toLowerCase();

  const filteredQuestions = questions.filter((question) => {
    const matchesSearch = question.title
      .toLowerCase()
      .includes(searchTerm);

    const matchesCategory =
      filters.category === "All" ||
      question.category === filters.category;

    const matchesDifficulty =
      filters.difficulty === "All" ||
      question.difficulty === filters.difficulty;

    const matchesStatus =
      filters.status === "All" ||
      question.status === filters.status;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesDifficulty &&
      matchesStatus
    );
  });

  return (
    <section className="card" aria-labelledby="questions-heading">
      <div className="section-heading">
        <div>
          <h2 id="questions-heading">Your Questions</h2>

          <p role="status">
            Showing {filteredQuestions.length} of {questions.length} questions
          </p>
        </div>
      </div>

      <QuestionFilters
        filters={filters}
        onChange={updateFilter}
        onClear={clearFilters}
      />

      {questions.length === 0 ? (
        <EmptyState
          title="No questions yet"
          description="Add your first question using the form above."
        />
      ) : filteredQuestions.length === 0 ? (
        <EmptyState
          title="No matching questions"
          description="Try a different search or clear your filters."
          action={
            <button
              className="button button-secondary"
              type="button"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          }
        />
      ) : (
        <ul className="question-list">
          {filteredQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
            />
          ))}
        </ul>
      )}
    </section>
  );
}