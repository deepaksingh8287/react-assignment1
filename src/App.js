import logo from './logo.svg';
import './App.css';
import TaskProvider from './context/TaskContext';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div className="App">
        <TaskProvider>
      <TaskManager />
    </TaskProvider>
    </div>
  );
}

export default App;
