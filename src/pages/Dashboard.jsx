import DashboardStats from "../components/DashboardStats";
import MachineCodingStatus from "../components/MachineCodingStatus";
import ProgressBar from "../components/ProgressBar";
import QuestionForm from "../components/QuestionForm";
import QuestionList from "../components/QuestionList";
import { usePractice } from "../contexts/PracticeContext";

export default function Dashboard() {
  const { storageError } = usePractice();

  return (
    <div className="dashboard">
      <div className="page-heading">
        <span className="eyebrow">YOUR WEEKLY WORKSPACE</span>
        <h1>Interview Practice Tracker</h1>
        <p>
          Organize your questions, track your progress, and prepare
          with confidence.
        </p>
      </div>

      {storageError && (
        <div className="storage-warning" role="alert">
          {storageError}
        </div>
      )}

      <DashboardStats />

      <div className="overview-grid">
        <ProgressBar />
        <MachineCodingStatus />
      </div>

      <QuestionForm />
      <QuestionList />
    </div>
  );
}