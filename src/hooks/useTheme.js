import { useState, useEffect } from 'react';

/**
 * Custom hook for managing Light / Dark theme.
 * - Reads saved preference from localStorage
 * - Falls back to OS prefers-color-scheme
 * - Toggles the `dark` class on <html>
 * - Persists choice to localStorage
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // 1. Check localStorage
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;

    // 2. Fall back to OS preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';

    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
