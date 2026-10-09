import { usePractice } from "../contexts/PracticeContext";

export default function DashboardStats() {
  const { questions } = usePractice();

  const completedQuestions = questions.filter(
    (question) => question.status === "Completed"
  );

  const completedDSA = completedQuestions.filter(
    (question) => question.category === "DSA"
  ).length;

  const completedInterview = completedQuestions.filter(
    (question) =>
      question.category === "Git" ||
      question.category === "Technical"
  ).length;

  const stats = [
    {
      label: "Total Questions",
      value: questions.length,
      description: "Questions in your tracker",
    },
    {
      label: "Completed DSA",
      value: completedDSA,
      description: "DSA problems marked completed",
    },
    {
      label: "Completed Interview Questions",
      value: completedInterview,
      description: "Completed Git and Technical questions",
    },
  ];

  return (
    <section className="stats-grid" aria-label="Practice statistics">
      {stats.map((stat) => (
        <article className="card stat-card" key={stat.label}>
          <h2>{stat.label}</h2>
          <strong className="stat-value">{stat.value}</strong>
          <p>{stat.description}</p>
        </article>
      ))}
    </section>
  );
}