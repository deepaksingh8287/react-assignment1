import { Filter } from "lucide-react";
import DragDropTaskList from "./DragAndDropTaskList";
import TaskFilter from "./TaskFilter";
import TaskForm from "./TaskForm";
import Header from "./Header";
import { useTask } from "../hooks/useTask";

const TaskManager = () => {
  const { theme, filteredTasks } = useTask();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Header />
        <TaskForm />
        <TaskFilter />
        
        {filteredTasks.length === 0 ? (
          <div className={`text-center py-12 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <Filter size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-lg">No tasks found</p>
            <p className="text-sm">Add a new task to get started!</p>
          </div>
        ) : (
          <DragDropTaskList />
        )}
      </div>
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .container {
          animation: fadeIn 0.5s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @media (max-width: 640px) {
          .container {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};
export default TaskManager