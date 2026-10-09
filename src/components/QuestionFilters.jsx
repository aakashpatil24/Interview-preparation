import {
  CATEGORIES,
  DIFFICULTIES,
  STATUSES,
} from "../constants/practice";

export default function QuestionFilters({
  filters,
  onChange,
  onClear,
}) {
  function handleChange(event) {
    onChange(event.target.name, event.target.value);
  }

  return (
    <div className="filters-panel">
      <div className="filters-grid">
        <div className="field">
          <label htmlFor="search">Search questions</label>

          <input
            id="search"
            name="search"
            type="search"
            placeholder="Search by title..."
            value={filters.search}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="filter-category">Category</label>

          <select
            id="filter-category"
            name="category"
            value={filters.category}
            onChange={handleChange}
          >
            <option value="All">All Categories</option>

            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="filter-difficulty">Difficulty</label>

          <select
            id="filter-difficulty"
            name="difficulty"
            value={filters.difficulty}
            onChange={handleChange}
          >
            <option value="All">All Difficulties</option>

            {DIFFICULTIES.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="filter-status">Status</label>

          <select
            id="filter-status"
            name="status"
            value={filters.status}
            onChange={handleChange}
          >
            <option value="All">All Statuses</option>

            {STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        className="button button-secondary"
        type="button"
        onClick={onClear}
      >
        Clear Filters
      </button>
    </div>
  );
}