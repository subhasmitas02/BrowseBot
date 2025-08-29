import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ThemeToggle from '../components/ThemeToggle';
import { ThemeContext } from '../context/ThemeContext';

export default function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleSearch = () => {
    if (query.trim() !== '') {
      navigate(`/results?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div
      className={`
        min-h-screen flex flex-col items-center justify-center px-4 py-8 transition-colors duration-500
        ${theme === 'dark'
          ? 'bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white'
          : 'bg-gradient-to-br from-white via-pink-200 to-purple-300 text-gray-900'}
      `}
    >
      {/* Theme toggle top right */}
      <div className="absolute top-5 right-5">
        <ThemeToggle />
      </div>

      {/* Branding */}
      <h1 className="text-6xl font-extrabold mb-4 mt-44 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text select-none">
        BrowseBot
      </h1>

      <p className={`text-lg md:text-xl mb-10 select-none 
        ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
        Smart, Fast, Private Search Engine.
      </p>

      {/* Search input */}
      <div className="w-full max-w-xl mb-52">
        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
          onKeyDown={handleKeyDown}
        />
      </div>

      {/* Footer */}
      <footer className={`mt-14 text-sm  select-none 
        ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
        © 2025 • Built with ❤️ by Subhasmita
      </footer>
    </div>
  );
}
