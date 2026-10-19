import { Button, Input, notification } from "antd"
import { useState } from "react";
import { creatUserAPI } from "../services/apiService";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await creatUserAPI(fullName, email, password, phone)
        console.log(">>> check res: ", res)
        if (res.data) {
            notification.success({
                 message: "Create user successfully",
                description: "Tạo user thành công"
            })
        }
        else
        {
            notification.error({
                message: "Create user failed",
                description: JSON.stringify(res.message)
            })
        }
        console.log(">>> check res: ", res.data)
    }
    return (
        <form className="user-form" style={{ margin: "20px" }} onSubmit={handleSubmit}>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div>
                    <span>FullName</span>
                    <Input placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}>

                    </Input>
                </div>
                <div>
                    <span>Email</span>
                    <Input placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                </div>
                <div>
                    <span>Password</span>
                    <Input placeholder="Enter your password" type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Input>
                </div>
                <div>
                    <span>Phone</span>
                    <Input placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    ></Input>
                </div>
                <div>
                    <Button type="primary" htmlType="submit">Create User</Button>
                </div>
            </div>
        </form>
    )
}
export default UserForm