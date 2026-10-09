// Clipboard-check mark: represents tracking and completing practice
// questions. Uses currentColor so it adapts to the surrounding theme.
export default function AppIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 4.5A2 2 0 0 1 11 2.5h2A2 2 0 0 1 15 4.5V5H9z"
        fill="currentColor"
      />
      <rect
        x="5.5"
        y="4"
        width="13"
        height="17.5"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8.75 12.8l2.35 2.35 4.4-4.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
