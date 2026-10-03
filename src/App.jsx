import { useState } from 'react';
import './components/Todo/todo.css';
import TodoData from './components/Todo/TodoData';
import TodoNew from './components/Todo/TodoNew';
import reactLogo from './assets/react.svg';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Learn JavaScript" },
    { id: 3, name: "Learn TypeScript" },
  ]);

  const hoidanit = "Eric";
  const age = 25;
  const data = {
    address: "HCM",
    country: "Vietnam"
  };

  const addNewTodo = (name) => {
    const newTodo = {
      id: todoList.length + 1,
      name: name
    };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div className="todo-page">
      <div className="todo-container">
        <h1 className="todo-title">Todo list</h1>

        <TodoNew addNewTodo={addNewTodo} />

        <TodoData
          name={hoidanit}
          age={age}
          data={data}
          todoList={todoList}
        />

        <img src={reactLogo} className="react-logo" alt="React logo" />
      </div>
    </div>
  );
}

export default App;