import { useState, useEffect } from 'react';
import './App.css';
import Input from './Input';
import Lista from './Lista';

function App() {
  const [tasks, setTasks] = useState({ tasks: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('tareasIniciales.json');
        const data = await response.json();
        setTasks({ tasks: data.iniciales });
      } catch (error) {
        console.error('Los datos no son incorrectos:', error);
      }
    };

    fetchData();
  }, []);

  const addTarea = (tarea) => {
    setTasks((prevTasks) => {
      return {
        tasks: [...prevTasks.tasks, { id: prevTasks.tasks.length + 1, text: tarea, strike: false }],
      };
    });
  };

  const deleteTarea = (tareaid) => {
    setTasks((prevTasks) => {
      return {
        tasks: prevTasks.tasks.filter((task) => task.id !== +tareaid),
      };
    });
  };

  const doneTarea = (tareaid) => {
    setTasks((prevTasks) => {
      return {
        tasks: prevTasks.tasks.map((task) =>
          task.id === +tareaid ? { ...task, strike: true } : task
        ),
      };
    });
  };

  return (
    <div className="App container text-center">
      <Input addTarea={addTarea} />
      <Lista tasksList={tasks.tasks} removeTaskCallback={deleteTarea} strikeTaskCallback={doneTarea} />
    </div>
  );
}

export default App;
