const TodoNew = (props) => {
    console.log(props);
    const { addNewTodo } = props;
    addNewTodo("Learn React");
    return (
        <div className="todo-form">
            <input className="text" type="text" placeholder="Enter your task" />
            <button className="add-button">Add</button>
        </div>
    )
}
export default TodoNew   