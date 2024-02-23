import { useState } from 'react';
import './App.css';
import Input from './Input';
import Lista from './Lista'; // Import Lista component

function App() {
  const [tasks, setTasks] = useState({ tasks: [] });

  const addTarea = (task) => {
    let tempTasks = tasks.tasks;
    task = { id: tempTasks.length + 1, text: task, strike: false };
    tempTasks.push(task);
    setTasks({ tasks: tempTasks });
  };


  return (
    <div>
      <Input addTarea={addTarea} /> 
      <Lista lista={tarea.tareas} removeTaskCallback={deleteTarea} strikeTaskCallback={strikeTask} />
    </div>
  );
}

export default App;
