export default function Pagination({ currentPage, totalPages, onChange }) {
  if (totalPages <= 1) {
    return null;
  }

  function goTo(page) {
    const clamped = Math.min(Math.max(page, 1), totalPages);
    onChange(clamped);
  }

  return (
    <nav className="pagination" aria-label="Question list pages">
      <button
        type="button"
        className="button button-secondary"
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span className="pagination-status" role="status">
        Page {currentPage} of {totalPages}
      </span>

      <button
        type="button"
        className="button button-secondary"
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </nav>
  );
}
