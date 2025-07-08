import { memo, useCallback, useState } from "react";
import { useTask } from "../hooks/useTask";
import TaskItem from "./TaskItem";
 const DragDropTaskList = memo(() => {
  const { filteredTasks, reorderTasks } = useTask();
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = useCallback((e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e, dropIndex) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== dropIndex) {
      reorderTasks(draggedIndex, dropIndex);
    }
    setDraggedIndex(null);
  }, [draggedIndex, reorderTasks]);

  return (
    <div className="space-y-3">
      {filteredTasks.map((task, index) => (
        <div
          key={task.id}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          className={`${draggedIndex === index ? 'opacity-50' : ''}`}
        >
          <TaskItem
            task={task}
            index={index}
            dragHandleProps={{
              onMouseDown: (e) => e.stopPropagation()
            }}
          />
        </div>
      ))}
    </div>
  );
});

export default DragDropTaskList