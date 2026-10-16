import { Button, Input } from "antd"
import { useState } from "react";

const UserForm = () => {
    const [fullName ,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    return (
        <div className="user-form" style={{ margin: "20px" }}>
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
                    <Button type="primary">Create User</Button>
                </div>
            </div>
        </div>
    )
}
export default UserForm