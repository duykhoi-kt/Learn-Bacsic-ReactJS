import PropTypes from 'prop-types';


const TodoData = (props) => {

    const { todoList } = props;
    return (
        <div className="todo-data">
            {todoList.map((item) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}

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