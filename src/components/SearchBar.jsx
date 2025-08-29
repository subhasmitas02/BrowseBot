import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function SearchBar({ query, setQuery, onSearch, onKeyDown }) {
  const { theme } = useContext(ThemeContext);

  const inputShadow =
    theme === 'dark'
      ? '0 4px 12px rgba(255, 255, 255, 0.1)' // light shadow in dark
      : '0 4px 12px rgba(0, 0, 0, 0.1)';      // dark shadow in light

  const buttonShadow =
    theme === 'dark'
      ? '0 2px 6px rgba(255, 255, 255, 0.2)'   // lighter
      : '0 2px 6px rgba(0, 0, 0, 0.2)';        // darker

  return (
    <div className="relative w-full">
      {/* Input with custom shadow */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Search the web..."
        className={`w-full pl-4 pr-12 py-3 rounded-full border-4 outline-none transition-all duration-300
          ${
            theme === 'dark'
              ? 'bg-white text-black border-pink-400 focus:ring-2 focus:ring-pink-500'
              : 'bg-white text-black border-purple-300 focus:ring-2 focus:ring-purple-400'
          }`}
        style={{ boxShadow: inputShadow }}
      />


      {/* Button with animated gradient + custom shadow */}
      <button
        onClick={onSearch}
        className={`absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full text-white transition-all duration-300
          bg-gradient-to-r bg-200 animate-gradient-x
          ${
            theme === 'dark'
              ? 'from-pink-500 via-fuchsia-500 to-purple-500'
              : 'from-purple-400 via-pink-400 to-fuchsia-400'
          }`}
        style={{ boxShadow: buttonShadow }}
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
