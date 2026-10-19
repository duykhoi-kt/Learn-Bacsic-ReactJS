import { Button, Input, Modal, notification } from "antd"
import { useState } from "react";
import { creatUserAPI } from "../services/apiService";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleSubmitBtn = async () => {
        if (!fullName.trim() || !email.trim() || !password.trim() || !phone.trim()) {
            notification.warning({
                message: "Missing information",
                description: "Please fill in all fields before creating a user."
            });
            return;
        }

        const res = await creatUserAPI(fullName, email, password, phone)
        console.log(">>> check res: ", res)
        if (res.data) {
            notification.success({
                message: "Create user successfully",
                description: "Tạo user thành công"
            });
            setIsModalOpen(false);
        }
        else {
            notification.error({
                message: "Create user failed",
                description: JSON.stringify(res.message)
            })
        }
        console.log(">>> check res: ", res.data)
    }
    return (
        <div className="user-form" style={{ margin: "20px" }} >

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Users</h3>
                <Button type="primary" onClick={() => setIsModalOpen(true)}>
                    Create User</Button>
            </div>

            <Modal
                title="Create User"

                open={isModalOpen}
                onOk={handleSubmitBtn}
                onCancel={() => setIsModalOpen(false)}
                maskClosable={false}
                okText={"CREATE"}

            >
                <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                    <div>
                        <span>FullName</span>
                        <Input
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input
                            placeholder="Enter your password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <span>Phone</span>
                        <Input
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                </div>
            </Modal>
        </div>
    )
}
export default UserForm