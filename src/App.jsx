import './components/Todo/todo.css'
import TodoData from './components/Todo/TodoData'
import TodoNew from './components/Todo/TodoNew'
import reactLogo from './assets/react.svg'
function App() {
  const hoidanit = "Eric";
  const age = 25;
  const data = {
    address: "HCM",
    country: "Vietnam"
  }
  return (
    <div className="todo-page">
      <div className="todo-container">
        <h1 className="todo-title">Todo list</h1>
        <TodoNew />
        <TodoData 
          // đây là cách truyền props vào component TodoData
          name= {hoidanit}
          age={age}
          data={data}
        />
        <img src={reactLogo} className="react-logo" alt="React logo" />
      </div>
    </div>
  )
}

export default App
