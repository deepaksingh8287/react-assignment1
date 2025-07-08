import { memo, useCallback, useState } from "react";
import { useTask } from "../hooks/useTask";
import { Plus } from 'lucide-react';
// Task Form Component
const TaskForm = memo(() => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const { addTask, theme } = useTask();

  const handleSubmit = useCallback(() => {
    if (!input.trim()) {
      setError('Task cannot be empty');
      return;
    }
    addTask(input);
    setInput('');
    setError('');
  }, [input, addTask]);

  const handleInputChange = useCallback((e) => {
    setInput(e.target.value);
    if (error) setError('');
  }, [error]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }, [handleSubmit]);

  return (
    <div className="mb-6">
      <div className="flex gap-2">
        <div className="flex-1">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Add a new task..."
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500'
            } ${error ? 'border-red-500' : ''}`}
          />
          {error && (
            <p className="text-red-500 text-sm mt-1 animate-pulse">{error}</p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 ${
            theme === 'dark'
              ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500'
              : 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500'
          }`}
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
});
export default TaskForm