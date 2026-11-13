import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { notification, Popconfirm, Table } from 'antd';
import UpdateUserModal from './updateUserModal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import PropTypes from 'prop-types';
import { deleteUserAPI } from '../services/apiService';

const UserTable = (props) => {
    const { dataUsers, loadUser, current, pageSize, total, setCurrent, setPageSize } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    const [dataDetail, setDataDetail] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const columns = [
        {
            title: "STT",
            render: (_, record, index) => {
                return (
                    <>
                        {index + 1}
                    </>
                )
            }
        }
        ,
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href="#"
                        onClick={() => {
                            setDataDetail(record);
                            setIsDetailOpen(true);
                        }}
                    >{record._id}</a>
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "10px" }}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true);
                        }}
                        style={{ color: "orange" }} /> Edit
                    <Popconfirm
                        title="Xóa người dùng"
                        description="Bạn có chắc chắn muốn xóa người dùng này không?"
                        onConfirm={() => handleDeleteUser(record._id)}
                        okText="Xóa"
                        cancelText="Hủy"
                        placement="left"
                    >
                        <DeleteOutlined style={{ color: "red" }} />
                    </Popconfirm>
                </div >
            ),
        },

    ];

    const handleDeleteUser = async (id) => {
        const res = await deleteUserAPI(id);
        if (res.data) {
            notification.success({
                message: "Delete user successfully",
                description: "Xóa user thành công"
            });
            await loadUser();
        }
        else {
            notification.error({
                message: "Delete user failed",
                description: JSON.stringify(res.message)
            })
        }
    };
    const onChange = (pagination,filters,sorter,extra) => {
        console.log('params', pagination,filters,sorter,extra);
    }

    return (
        <>
            <Table columns={columns} dataSource={dataUsers} rowKey="_id"

                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }
                }
                onChange={onChange}

            />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <ViewUserDetail
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                isDetailOpen={isDetailOpen}
                setIsDetailOpen={setIsDetailOpen}
                loadUser={loadUser}
            />
        </>
    );
}
export default UserTable;
UserTable.propTypes = {
    dataUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
    loadUser: PropTypes.func.isRequired,
};
