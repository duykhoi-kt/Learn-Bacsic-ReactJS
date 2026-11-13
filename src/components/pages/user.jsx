import UserForm from "../user/userForm"
import UserTable from "../user/userTable"
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../services/apiService';

const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {

        const res = await fetchAllUserAPI(current,pageSize);  
        if (res.data) {
            setDataUsers(res.data.result);
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total);
        }
    }
    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={dataUsers} loadUser={loadUser}
                current={current}
                pageSize={pageSize}
                total={total}
                settCurrent={setCurrent}
                setPageSize={setPageSize}
            />
        </div>
    )
}

export default UserPage