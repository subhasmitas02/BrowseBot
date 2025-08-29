import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function SearchResult({ title, link, description }) {
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  // Light and dark mode styles
  const lightModeStyle = {
    backgroundColor: '#f3e8ff',
    color: 'black',
    boxShadow: isHovered ? '0 4px 12px rgba(168, 85, 247, 0.4)' : 'none', // soft purple shadow
  };

  const darkModeStyle = {
    boxShadow: isHovered ? '0 4px 12px rgba(168, 85, 247, 0.2)' : 'none', // dimmer shadow for dark
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="block p-4 border rounded-lg transition-transform duration-200 transform hover:scale-105 border-purple-800"
      style={theme === 'light' ? lightModeStyle : darkModeStyle}
    >
      <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-400 hover:underline">
        {title}
      </h3>

      <p
        className="mt-1 line-clamp-2 dark:text-gray-300"
        style={theme === 'light' ? { color: 'black' } : {}}
      >
        {description}
      </p>

      <p
        className="mt-1 text-sm dark:text-gray-400 break-all"
        style={theme === 'light' ? { color: 'black' } : {}}
      >
        {link}
      </p>
    </a>
  );
}
