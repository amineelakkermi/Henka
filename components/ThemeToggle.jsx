'use client'

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => toggleTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded-full focus:outline-none  focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <span className="text-yellow-300">☀️</span>
      ) : (
        <span className="text-gray-700">🌙</span>
      )}
    </button>
  );
}
