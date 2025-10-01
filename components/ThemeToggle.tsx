"use client";

import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Apply theme to document
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    // Prevent hydration mismatch by showing a placeholder
    return (
      <div className="w-10 h-6 rounded-full opacity-50 animate-pulse bg-gray-200" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-6 rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 group"
      style={{ backgroundColor: 'var(--surface)' }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Toggle thumb */}
      <div
        className={`absolute top-0.5 w-5 h-5 rounded-full shadow-lg transition-all duration-300 ease-out transform ${
          theme === 'dark' ? 'translate-x-4' : 'translate-x-0.5'
        } group-hover:scale-110`}
        style={{ backgroundColor: 'var(--primary)' }}
      >
        {/* Icon inside thumb */}
        <div className="absolute inset-0 flex items-center justify-center">
          {theme === 'dark' ? (
            <svg
              className="w-3 h-3 transition-all duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              style={{ color: 'var(--background)' }}
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg
              className="w-3 h-3 transition-all duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              style={{ color: 'var(--background)' }}
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
