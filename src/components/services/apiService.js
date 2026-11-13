// import axios from "axios";
import axios from "./axiosCustomize";
const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data)
}
const updateUserAPI = (id, fullName, phone) => {
    const URL_BACKEND = "api/v1/user";
    const data = {
        _id: id,
        fullName: fullName,
        phone: phone
    }
    return axios.put(URL_BACKEND, data)
}
const fetchAllUserAPI = (current, pageSize) => {
    const URL_BACKEND = `api/v1/user?current=${current}&pageSize=${pageSize}`;
    return axios.get(URL_BACKEND)
}
const deleteUserAPI = (id) => {
    const URL_BACKEND = `api/v1/user/${id}`;
    return axios.delete(URL_BACKEND)
}
const handleUploadFile = (file, folder) => {
    const URL_BACKEND = `api/v1/file/upload`;

    const config = {
        headers: {
            "upload-type": folder,
        }
    }
    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file);

    return axios.post(URL_BACKEND, bodyFormData, config)
}
const updateUserAvatar = (avatar, _id, fullName, phone) => {
    const URL_BACKEND = `api/v1/user`;
    const data = {
        _id: _id,
        avatar: avatar,
        fullName: fullName,
        phone: phone
    }
    return axios.put(URL_BACKEND, data)
}
export { createUserAPI, fetchAllUserAPI, updateUserAPI, deleteUserAPI, handleUploadFile, updateUserAvatar }