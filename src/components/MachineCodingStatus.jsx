import { STATUSES } from "../constants/practice";
import { usePractice } from "../contexts/PracticeContext";

export default function MachineCodingStatus() {
  const {
    machineCodingStatus,
    updateMachineCodingStatus,
  } = usePractice();

  return (
    <section className="card">
      <div className="section-heading">
        <div>
          <h2>Machine Coding</h2>
          <p>Track your project separately.</p>
        </div>
      </div>

      <div className="field">
        <label htmlFor="machine-status">Project status</label>

        <select
          id="machine-status"
          value={machineCodingStatus}
          onChange={(event) =>
            updateMachineCodingStatus(event.target.value)
          }
        >
          {STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}