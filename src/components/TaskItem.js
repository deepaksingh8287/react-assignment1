import { Check, Trash2, GripVertical } from 'lucide-react';
import { useTask } from '../hooks/useTask';
import { memo, useCallback } from 'react';
const TaskItem = memo(({ task, index, dragHandleProps }) => {
  const { toggleTask, deleteTask, theme } = useTask();

  const handleToggle = useCallback(() => {
    toggleTask(task.id);
  }, [toggleTask, task.id]);

  const handleDelete = useCallback(() => {
    deleteTask(task.id);
  }, [deleteTask, task.id]);

  return (
    <div
      className={`group flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-[1.02] ${
        theme === 'dark'
          ? 'bg-gray-800 border-gray-700 hover:border-gray-600'
          : 'bg-white border-gray-200 hover:border-gray-300'
      } ${task.completed ? 'opacity-60' : ''}`}
      style={{
        animation: `slideIn 0.3s ease-out ${index * 0.1}s both`
      }}
    >
      <div
        {...dragHandleProps}
        className={`cursor-grab active:cursor-grabbing p-1 rounded ${
          theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
        }`}
      >
        <GripVertical size={16} className="text-gray-500" />
      </div>
      
      <button
        onClick={handleToggle}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-200 ${
          task.completed
            ? 'bg-green-500 border-green-500 text-white'
            : theme === 'dark'
            ? 'border-gray-600 hover:border-green-500'
            : 'border-gray-300 hover:border-green-500'
        }`}
      >
        {task.completed && <Check size={16} className="mx-auto" />}
      </button>
      
      <span
        className={`flex-1 transition-all duration-200 ${
          task.completed
            ? 'line-through text-gray-500'
            : theme === 'dark'
            ? 'text-white'
            : 'text-gray-900'
        }`}
      >
        {task.text}
      </span>
      
      <button
        onClick={handleDelete}
        className={`opacity-0 group-hover:opacity-100 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 ${
          theme === 'dark'
            ? 'hover:bg-red-900 text-red-400'
            : 'hover:bg-red-100 text-red-600'
        }`}
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
});
export default TaskItem