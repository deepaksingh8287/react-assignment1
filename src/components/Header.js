import { memo } from "react";
import { useTask } from "../hooks/useTask";
import {  Sun, Moon,  } from 'lucide-react';
const Header = memo(() => {
  const { theme, toggleTheme } = useTask();

  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Task Manager
      </h1>
      <button
        onClick={toggleTheme}
        className={`p-3 rounded-lg transition-all duration-200 transform hover:scale-110 ${
          theme === 'dark'
            ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </header>
  );
});
export default Header