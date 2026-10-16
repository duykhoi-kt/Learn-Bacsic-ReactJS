import TodoNew from './TodoNew';
import reactLogo from '../../assets/react.svg';
import TodoData from './TodoData';
import './todo.css';
import { useState } from 'react';
const todoApp = () => {
    const [todoList, setTodoList] = useState([
        // { id: 1, name: "Learn React" },
        // { id: 2, name: "Learn JavaScript" },
        // { id: 3, name: "Learn TypeScript" },
    ]);
    const addNewTodo = (name) => {
        const newTodo = {
            id: todoList.length + 1,
            name: name
        };
        setTodoList([...todoList, newTodo]);
    };

    // function handleDeleteTodo

    const handleDeleteTodo = (id) => {
        setTodoList(todoList.filter((item) => item.id !== id));
    }

    return (
        <>
            <div className="todo-page">
                <div className="todo-container">
                    <h1 className="todo-title">Todo list</h1>

                    <TodoNew addNewTodo={addNewTodo} />
                    {todoList.length > 0 ?
                        <TodoData
                            handleDeleteTodo={handleDeleteTodo}
                            todoList={todoList}
                        />
                        :
                        <div>
                            <img src={reactLogo} className="react-logo" alt="React logo" />
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
export default todoApp