import PropTypes from 'prop-types';


const TodoData = (props) => {

    const { todoList } = props;
    console.log(todoList);
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={index}>
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>

                )
            })}
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

TodoData.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    data: PropTypes.shape({
        address: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    }).isRequired,
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};
export default TodoData