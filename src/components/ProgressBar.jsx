import { usePractice } from "../contexts/PracticeContext";

export default function ProgressBar() {
  const { questions } = usePractice();

  const completedCount = questions.filter(
    (question) => question.status === "Completed"
  ).length;

  const percentage =
    questions.length === 0
      ? 0
      : Math.round(
          (completedCount / questions.length) * 100
        );

  return (
    <section className="card" aria-labelledby="progress-heading">
      <div className="section-heading">
        <div>
          <h2 id="progress-heading">Weekly Progress</h2>
          <p>
            {completedCount} of {questions.length} questions completed
          </p>
        </div>

        <strong className="progress-percentage">
          {percentage}%
        </strong>
      </div>

      <progress
        value={percentage}
        max="100"
        aria-label="Question completion"
      />

      <p className="helper-text">
        Progress includes all stored questions, not just filtered results.
      </p>
    </section>
  );
}