import { useEffect, useState } from "react";

// Keep this key in sync with the inline script in index.html that applies
// the theme before React mounts (avoids a flash of the wrong theme).
export const THEME_STORAGE_KEY = "interview-practice-tracker:theme";

function getPreferredTheme() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);

    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch {
    // Ignore storage access errors (e.g. private browsing) and fall back.
  }

  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return "light";
}

export default function useTheme() {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage write errors; the theme still applies for this tab.
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return [theme, toggleTheme];
}
