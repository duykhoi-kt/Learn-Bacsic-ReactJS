import PropTypes from 'prop-types';


const TodoData = (props) => {
    // console.log(props);
    const { name, age, data } = props;
    return (
        <div className="todo-data">
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Address: {data.address}</div>
            <div>Country: {data.country}</div>
            <div>Learning React</div>
            <div>Watching YouTube</div>
        </div>
    )
}

TodoData.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    data: PropTypes.shape({
        address: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    }).isRequired
}
export default TodoData