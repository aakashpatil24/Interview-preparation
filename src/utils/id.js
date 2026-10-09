// crypto.randomUUID() requires a secure context (HTTPS/localhost) and is
// unavailable in some older browsers. Fall back to a simple unique ID so
// adding questions keeps working everywhere.
export function generateId() {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }

  return `id-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
