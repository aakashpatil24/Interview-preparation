export default function EmptyState({
  title,
  description,
  action,
}) {
  return (
    <div className="empty-state">
      <span className="empty-icon" aria-hidden="true">
        ◇
      </span>

      <h3>{title}</h3>
      <p>{description}</p>

      {action}
    </div>
  );
}