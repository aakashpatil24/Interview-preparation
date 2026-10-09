import { STATUSES } from "../constants/practice";
import { usePractice } from "../contexts/PracticeContext";

export default function QuestionCard({ question }) {
  const {
    updateQuestionStatus,
    deleteQuestion,
  } = usePractice();

  function handleDelete() {
    const confirmed = window.confirm(
      `Delete "${question.title}"? This cannot be undone.`
    );

    if (confirmed) {
      deleteQuestion(question.id);
    }
  }

  return (
    <li className="question-card">
      <div className="question-details">
        <h3>{question.title}</h3>

        <div className="badges">
          <span className="badge badge-category">
            {question.category}
          </span>

          <span
            className={`badge difficulty-${question.difficulty.toLowerCase()}`}
          >
            {question.difficulty}
          </span>
        </div>
      </div>

      <div className="question-actions">
        <select
          value={question.status}
          aria-label={`Status for ${question.title}`}
          onChange={(event) =>
            updateQuestionStatus(question.id, event.target.value)
          }
        >
          {STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <button
          className="button button-danger"
          type="button"
          onClick={handleDelete}
          aria-label={`Delete ${question.title}`}
        >
          Delete
        </button>
      </div>
    </li>
  );
}