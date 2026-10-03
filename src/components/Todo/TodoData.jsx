import PropTypes from 'prop-types';


const TodoData = (props) => {



    const { todoList, handleDeleteTodo } = props;
    return (
        <div className="todo-data">
            {todoList.map((item) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
                    </div>
                )
            })}

        </div>
    )
}

TodoData.propTypes = {

    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    handleDeleteTodo: PropTypes.func.isRequired
};
export default TodoData