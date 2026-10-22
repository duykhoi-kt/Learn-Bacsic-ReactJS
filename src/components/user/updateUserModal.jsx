import { useEffect, useState } from "react";
import { Input, Modal, notification } from "antd"
import {  updateUserAPI } from "../services/apiService";
import PropTypes from "prop-types";
const UpdateUserModal = (props) => {

  const [fullName, setFullName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const {
    isModalUpdateOpen,
    setIsModalUpdateOpen,
    dataUpdate,
    setDataUpdate,
    loadUser
  } = props;

  useEffect(() => {
    if (dataUpdate) {
      setId(dataUpdate._id)
      setFullName(dataUpdate.fullName)
      setPassword(dataUpdate.password)
      setPhone(dataUpdate.phone)

    }
  }, [dataUpdate])
  const handleSubmitBtn = async () => {
    const res = await updateUserAPI(id, fullName, phone)
    if (res.data) {
      notification.success({
        message: "Update user successfully",
        description: "Cập nhật user thành công"
      });
      resetAndCloseModal();
      await loadUser();
    }
    else {
      notification.error({
        message: "Update user failed",
        description: JSON.stringify(res.message)
      })
    }

  }
  const resetAndCloseModal = () => {
    setIsModalUpdateOpen(false);
    setFullName("");
    setId("");
    setPassword("");
    setPhone("");
    setDataUpdate(null);
  }
  return (
    <Modal
      title="Update User"

      open={isModalUpdateOpen}
      onOk={handleSubmitBtn}
      onCancel={() => resetAndCloseModal()}
      maskClosable={false}
      okText={"SAVE"}

    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>Id</span>
          <Input
            placeholder="Enter your email"
            value={id}
            disabled
          />
        </div>
        <div>
          <span>FullName</span>
          <Input
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
  )

}
export default UpdateUserModal
UpdateUserModal.propTypes = {
  isModalUpdateOpen: PropTypes.bool.isRequired,
  setIsModalUpdateOpen: PropTypes.func.isRequired,
  dataUpdate: PropTypes.shape({
    _id: PropTypes.string,
    fullName: PropTypes.string,
    password: PropTypes.string,
    phone: PropTypes.string,
  }),
  setDataUpdate: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
};