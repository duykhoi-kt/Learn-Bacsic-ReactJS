const TodoNew = (props) => {
    console.log(props);
    // const { addNewTodo } = props;
    const handleClick = () => {
        alert("Button clicked!");
    }
    const handleOnChange = (event) => {
        console.log(event.target.value);
    }
    return (
        <div className="todo-form">
            <input className="text" type="text" placeholder="Enter your task" onChange={handleOnChange} />
            <button className="add-button" onClick={handleClick}>Add</button>
        </div>
    )
}
export default TodoNew   