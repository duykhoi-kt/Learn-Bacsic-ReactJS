import UserForm from "../user/userForm"
import UserTable from "../user/userTable"
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../services/apiService';

const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([]);
    useEffect(() => {
        console.log("=>>>>> run render 1111");
        loadUser();
    }, []);
    const loadUser = async () => {

        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }
    return (
        <div style={{ padding: "20px" }}>
            <UserForm  loadUser={loadUser}/>
            <UserTable dataUsers={dataUsers} />
        </div>
    )
}

export default UserPage