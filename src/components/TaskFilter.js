import { memo } from "react";
import { useTask } from "../hooks/useTask";
const TaskFilter = memo(() => {
  const { filter, setFilter, taskStats, theme } = useTask();

  const filters = [
    { key: 'all', label: `All (${taskStats.total})` },
    { key: 'pending', label: `Pending (${taskStats.pending})` },
    { key: 'completed', label: `Completed (${taskStats.completed})` }
  ];

  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      {filters.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setFilter(key)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
            filter === key
              ? theme === 'dark'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-500 text-white'
              : theme === 'dark'
              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
});
export default TaskFilter