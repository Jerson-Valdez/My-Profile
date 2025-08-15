import { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "";
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        background: "var(--primary-color)",
        color: "var(--text-color)",
        border: "none",
        padding: "8px 12px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default ThemeToggle;
