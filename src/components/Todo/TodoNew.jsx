import { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props;
    const [valueInput, setValueInput] = useState("");

    const handleClick = () => {
        // Chặn nếu người dùng chưa nhập hoặc chỉ gõ dấu cách
        if (!valueInput.trim()) {
            alert("Vui lòng nhập nội dung công việc!");
            return;
        }

        // Gọi hàm từ component cha
        if (addNewTodo) {
            addNewTodo(valueInput.trim());
        }

        // Reset ô input về rỗng
        setValueInput("");
    };

    const handleOnChange = (name) => {
        setValueInput(name);
    };

    return (
        <div className="todo-form">
            <input
                className="text"
                type="text"
                placeholder="Enter your task"
                value={valueInput} // Đồng bộ giá trị input với state
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button className="add-button" onClick={handleClick}>Add</button>

            <div>
                My text input is : {valueInput}
            </div>
        </div>
    );
};

export default TodoNew;