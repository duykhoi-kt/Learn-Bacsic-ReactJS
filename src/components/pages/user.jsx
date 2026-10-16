import UserForm from "../user/userForm"
import UserTable from "../user/userTable"

const UserPage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <UserForm />
            <UserTable />
        </div>
    )
}

export default UserPage