import { useRef, useState } from "react";

export default function useLocalStorage(key, initialValue, validate) {
  const [initialState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      if (storedValue === null) {
        // Nothing saved yet: persist the starter data immediately so
        // every future load reads from LocalStorage only (edits and
        // deletions of the starter data stick, instead of reappearing).
        try {
          localStorage.setItem(key, JSON.stringify(initialValue));
        } catch {
          return {
            value: initialValue,
            warning:
              "Changes could not be saved in this browser. " +
              "They may be lost after refresh.",
          };
        }

        return {
          value: initialValue,
          warning: "",
        };
      }

      const parsedValue = JSON.parse(storedValue);

      if (!validate(parsedValue)) {
        throw new Error("Invalid stored data");
      }

      return {
        value: parsedValue,
        warning: "",
      };
    } catch {
      return {
        value: initialValue,
        warning:
          "Saved data could not be loaded. Default questions have been restored.",
      };
    }
  });

  const [value, setStoredValue] = useState(initialState.value);
  const [saveError, setSaveError] = useState("");

  // Track the latest value outside of state so updates made in quick
  // succession (e.g. multiple setValue calls in one handler) persist the
  // correct data, without needing an effect to react to state changes.
  const valueRef = useRef(initialState.value);

  function setValue(updater) {
    const nextValue =
      typeof updater === "function" ? updater(valueRef.current) : updater;

    valueRef.current = nextValue;
    setStoredValue(nextValue);

    try {
      localStorage.setItem(key, JSON.stringify(nextValue));
      setSaveError("");
    } catch {
      setSaveError(
        "Changes could not be saved in this browser. " +
          "They may be lost after refresh.",
      );
    }
  }

  return [value, setValue, saveError || initialState.warning];
}
