import { useEffect, useState } from 'react'
import { Todo } from './Components/Todo/Todo';
import './App.css'
import { Task } from './Model/Task';
import { TodoForm } from './Components/TodoForm/TodoForm';
import { Filter } from './Components/Filter/Filter';

function App() {

  const [toDos, setToDos] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("toDos");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);


  const addToDo = (description: string) => {
    const newToDos = [
      ...toDos,
      {
        id: Math.floor(Math.random() * 1000),
        description,
        isCompleted: false
      }]

    setToDos(newToDos);
  }

  const removeToDo = (id: number) => {
    const newToDos = [...toDos];
    const filteredToDos = newToDos.filter(item => item.id !== id ? item : null);
    setToDos(filteredToDos);
  }

  const completeToDo = (id: number) => {
    const newToDos = [...toDos];
    newToDos.map(item => item.id === id ? item.isCompleted = !item.isCompleted : item);
    setToDos(newToDos);
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      {toDos.length > 0 ?
        <><Filter filter={filter} setFilter={setFilter} /><div className='todo-list'>
          {toDos
            .filter(item => filter === "All" ? true
              : filter === "Completed"
                ? item.isCompleted
                : !item.isCompleted)
            .map((item) => (
              <Todo key={item.id}
                item={item}
                removeToDo={removeToDo}
                completeToDo={completeToDo} />
            ))}
        </div></> :
        <h3 className='not-found'>Não há nenhuma tarefa no momento</h3>
      }
      <TodoForm addToDo={addToDo} />
    </div>
  )
}

export default App
