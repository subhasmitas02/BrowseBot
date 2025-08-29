// src/App.jsx
import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home"; // Home page component

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 px-4 py-8
        ${
          theme === "light"
            ? "bg-gradient-to-br from-white via-pink-200 to-purple-300 text-gray-900"
            : "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-gray-100"
        }`}
    >
      <ThemeToggle />
      <Home />
    </div>
  );
};

export default App;
