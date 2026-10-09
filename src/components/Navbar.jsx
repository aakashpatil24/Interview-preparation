import useTheme from "../hooks/useTheme";
import AppIcon from "./icons/AppIcon";
import ThemeIcon from "./icons/ThemeIcon";

export default function Navbar() {
  const [theme, toggleTheme] = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <a className="brand" href="#main-content">
          <span className="brand-icon" aria-hidden="true">
            <AppIcon />
          </span>
          <span>Practice Tracker</span>
        </a>

        <div className="navbar-actions">
          <span className="navbar-label">Interview preparation</span>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-pressed={isDark}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <ThemeIcon theme={theme} />
          </button>
        </div>
      </div>
    </header>
  );
}
