import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/themeStore';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`p-2 rounded-full ${
        isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-yellow-100 text-gray-800'
      }`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;