import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="bg-accent text-bg rounded-lg px-4 py-2 font-medium"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}