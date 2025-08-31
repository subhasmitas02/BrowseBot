import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchSearchResults } from "../api/fetchSearchResults";
import { summarizeWithGPT } from "../api/summarizeWithGPT"; // Import the summarizeWithGPT function
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import SearchResult from "../components/SearchResult";
import SearchBar from "../components/SearchBar";

export default function Results() {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const [results, setResults] = useState([]);
  const [summary, setSummary] = useState(""); // State for GPT summary
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [summaryLoading, setSummaryLoading] = useState(false); // For summary loading state
  const [searchQuery, setSearchQuery] = useState(query || "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchSearchResults(query);
        setResults(res.results);
        setLoading(false);

        // Fetch GPT summary after search results
        setSummaryLoading(true);
        const gptSummary = await summarizeWithGPT(res.results, query);
        setSummary(gptSummary); // Save the GPT summary
        setSummaryLoading(false);
      } catch (err) {
        setError("Failed to fetch search results.");
        setLoading(false);
      }
    };

    if (query) fetchData();
  }, [query]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/results?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div
      className={`min-h-screen px-4 py-6 transition-all duration-500
        ${theme === "light"
          ? "bg-gradient-to-br from-white via-pink-100 to-purple-200 text-gray-900"
          : "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white"
        }`}
    >
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-6">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          BrowseBot
        </h1>

        {/* Search Bar */}
        <div className="flex items-center justify-center w-full max-w-2xl mx-auto">
          <SearchBar
            query={searchQuery}
            setQuery={setSearchQuery}
            onSearch={handleSearch}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      {/* Results */}
      <div className="max-w-5xl mx-auto mt-6 space-y-4">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* GPT Summary */}
        {!loading && summary && (
            <div className={`max-w-4xl mx-auto rounded-lg p-4 shadow-md mb-6 ${
                theme === "light"
                    ? "bg-fuchsia-700 text-white border-b-fuchsia-950"
                    : "bg-gray-800 text-white"
                }`}
            >
            <h2 className="text-lg font-bold mb-2 text-purple-700 dark:text-purple-300">AI Summary</h2>
            {summaryLoading ? (
              <p>Loading summary...</p>
            ) : (
              <p className="text-gray-800 dark:text-gray-200">{summary}</p>
            )}
          </div>
        )}

        {/* No results message */}
        {!loading && !error && results.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No results found for "{query}"
          </p>
        )}

        {/* Search Results */}
        {results.map((item, index) => (
          <SearchResult
            key={index}
            title={item.title}
            link={item.link}
            description={item.description}
            thumbnail={item.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
