import { useEffect, useRef, useState } from "react";
import { CATEGORIES, DIFFICULTIES, STATUSES } from "../constants/practice";
import { usePractice } from "../contexts/PracticeContext";

const INITIAL_FORM = {
  title: "",
  category: "DSA",
  difficulty: "Easy",
  status: "Pending",
};

const SUCCESS_MESSAGE_TIMEOUT_MS = 4000;

export default function QuestionForm() {
  const { addQuestion } = usePractice();

  const [form, setForm] = useState(INITIAL_FORM);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const titleRef = useRef(null);

  // Auto-clear the success message so it doesn't linger indefinitely.
  useEffect(() => {
    if (!successMessage) {
      return undefined;
    }

    const timeoutId = setTimeout(() => {
      setSuccessMessage("");
    }, SUCCESS_MESSAGE_TIMEOUT_MS);

    return () => clearTimeout(timeoutId);
  }, [successMessage]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
    setSuccessMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const title = form.title.trim();

    if (!title) {
      setError("Please enter a question title.");
      titleRef.current?.focus();
      return;
    }

    if (title.length < 3 || title.length > 150) {
      setError("The title must contain between 3 and 150 characters.");
      titleRef.current?.focus();
      return;
    }

    addQuestion({
      ...form,
      title,
    });

    // Keep selected options for faster entry of similar questions.
    setForm((current) => ({
      ...current,
      title: "",
    }));

    setError("");
    setSuccessMessage(`Added "${title}".`);
    titleRef.current?.focus();
  }

  return (
    <section className="card" aria-labelledby="add-question-heading">
      <div className="section-heading">
        <div>
          <h2 id="add-question-heading">Add a Question</h2>
          <p>Build your weekly practice list.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="field title-field">
            <label htmlFor="question-title">Question title</label>

            <input
              ref={titleRef}
              id="question-title"
              name="title"
              type="text"
              placeholder="Example: Explain the JavaScript event loop"
              value={form.title}
              onChange={handleChange}
              maxLength={150}
              required
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "title-error" : undefined}
            />
          </div>

          <div className="field">
            <label htmlFor="question-category">Category</label>

            <select
              id="question-category"
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="question-difficulty">Difficulty</label>

            <select
              id="question-difficulty"
              name="difficulty"
              value={form.difficulty}
              onChange={handleChange}
            >
              {DIFFICULTIES.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="question-status">Status</label>

            <select
              id="question-status"
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              {STATUSES.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        {error && (
          <p id="title-error" className="error-message" role="alert">
            {error}
          </p>
        )}

        <div className="form-footer">
          <button className="button button-primary" type="submit">
            + Add Question
          </button>

          <p className="success-message" role="status">
            {successMessage}
          </p>
        </div>
      </form>
    </section>
  );
}
