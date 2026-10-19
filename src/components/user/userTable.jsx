import { Table } from 'antd';
import { fetchAllUserAPI } from '../services/apiService';
import { useEffect, useState } from 'react';

const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([
        {
            _id: '1',
            fullName: 'John Doe',
            email: 'john.doe@example.com'
        },
        {
            _id: '2',
            fullName: 'Jane Smith',
            email: 'jane.smith@example.com'
        }
    ]);
    useEffect(() => {
        console.log("=>>>>> run render 1111");
        loadUser();
    }, []);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },


    ];
    const loadUser = async () => {
        console.log("run load user Start")
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }
    console.log("=>>>>> run render 0000");
    return <Table columns={columns} dataSource={dataUsers} rowKey="_id" />;
};

export default UserTable;