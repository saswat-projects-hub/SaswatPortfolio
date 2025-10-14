import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Sun size={18} className="text-yellow-600 dark:text-yellow-400" />
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <div className={`theme-toggle-thumb ${theme === 'dark' ? 'dark' : ''}`}>
          {theme === 'light' ? (
            <Sun size={12} className="text-gray-600 m-0.5" />
          ) : (
            <Moon size={12} className="text-gray-600 m-0.5" />
          )}
        </div>
      </button>
      <Moon size={16} className="text-blue-500 dark:text-blue-400" />
    </div>
  );
};

export default ThemeToggle;

