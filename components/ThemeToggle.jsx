'use client'

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi'; // 👈 استيراد الأيقونات

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
      className="p-2 rounded-full  focus:outline-none focus:ring-offset-2 focus:ring-offset-black focus:ring-white transition duration-200 hover:scale-105"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <FiSun className="text-yellow-300 text-[36px] md:text-[22px]" />
      ) : (
        <FiMoon className="text-white text-[36px] md:text-[22px]" />
      )}
    </button>
  );
}
