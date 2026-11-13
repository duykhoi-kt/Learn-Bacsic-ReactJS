import { Button, Drawer, notification } from 'antd';
import { useState } from 'react';
import { handleUploadFile, updateUserAvatar } from '../services/apiService';

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen, loadUser } = props;
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return;
        }
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    }
    const handleUpdateUserAvatar = async () => {
        // step 1: upload file
        const resUpload = await handleUploadFile(selectedFile, "avatar");
        if (resUpload.data) {
            // sccess
            const newAvatar = resUpload.data.fileUploaded;
            //step 2: update user
            const resUpdateAvatar = await updateUserAvatar(
                newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.phone);
            if (resUpdateAvatar .data) {
                setIsDetailOpen(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUser();
                notification.success({
                    message: "Cập nhật avatar thành công",
                    description: JSON.stringify(resUpdateAvatar.message)
                })
            } else {
                notification.error({
                    message: "Cập nhật avatar thất bại",
                    description: JSON.stringify(resUpdateAvatar.message)
                })
            }
        } else {
            notification.error({

                message: "Upload file thất bại",
                description: JSON.stringify(resUpload.message)
            })
        }
        console.log('resUpload:', resUpload);
    }
    console.log('Selected file:', preview);

    return (
        <>

            <Drawer
                width={"40vw"}
                title="User Detail"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={() => {
                    setIsDetailOpen(false);
                    setDataDetail(null);
                }}
                open={isDetailOpen}
            >
                {dataDetail ?
                    <>
                        <p>Id: {dataDetail._id}</p>
                        <br />
                        <p>Full Name: {dataDetail.fullName}</p>
                        <br />
                        <p>Email: {dataDetail.email}</p>
                        <br />
                        <p>Phone: {dataDetail.phone}</p>
                        <br />
                        <p> avatar:</p>
                        <div style={{
                            marginTop: "10px",
                            height: "100px",
                            border: "1px solid #ccc",
                        }}>
                            <img src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} alt="Avatar" style={{ width: "100px", height: "100px", objectFit: "contain" }} />
                        </div>
                        <br />
                        <div>

                            <label htmlFor='btnUpload' style={{
                                cursor: 'pointer',
                                width: "fit-content",
                                marginTop: "15px",
                                background: "orange",
                                padding: "5px 10px",
                                borderRadius: "5px",


                            }}>Upload Avatar</label>
                            <input
                                type='file' hidden id='btnUpload'
                                onChange={(event) => handleOnChangeFile(event)} />
                        </div>
                        <br />
                        {preview &&
                            <>
                                <div style={{
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                    height: "100px",
                                    width: "150px",
                                }}>
                                    <img style={{ height: "100%", width: "100%", objectFit: "contain" }} src={preview} />

                                </div>
                                <Button type="primary"
                                    onClick={() => handleUpdateUserAvatar()}
                                >Save
                                </Button>
                            </>
                        }

                    </> :
                    <>
                        <p>Không có dữ liệu</p>
                    </>}
            </Drawer >
        </>
    )
}
export default ViewUserDetail

