import { useState, useEffect } from 'react';
import './App.css';
import Input from './Input';
import Lista from './Lista';

function App() {
  const [tasks, setTasks] = useState({ tasks: [] });

  const addTarea = (tarea) => {
    let i = tasks["tasks"];
    let task = { id: i.length + 1, text: tarea, strike: false };
    i.push(task);
    setTasks({ tasks: i });
  };

const deleteTarea = (tareaid) => {
  let j = tasks["tasks"];
  let resultado = [];
  for (let i = 0; i < j.length; i++) {
    console.log(j[i].id, tareaid);
    if (j[i].id !== +tareaid) {
      resultado.push(j[i]);
    }
  }
  setTasks({ tasks: resultado });
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
      <Lista tasksList={tasks["tasks"]} removeTaskCallback={deleteTarea} strikeTaskCallback={doneTarea} />
    </div>
  );
}

export default App;
