import { Button, Drawer } from 'antd';

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

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
                {dataDetail ? <>
                    <p>Id: {dataDetail._id}</p>
                    <br />
                    <p>Full Name: {dataDetail.fullName}</p>
                    <br />
                    <p>Email: {dataDetail.email}</p>
                    <br />
                    <p>Phone: {dataDetail.phone}</p>
                    <br />
                    <p> avatar:</p>
                    <div>
                        <img src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} alt="Avatar" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                    </div>
                    <div>
                        <Button>
                            <label htmlFor='btnUpload' style={{ cursor: 'pointer' }}>Upload Avatar</label>
                        </Button>

                        <input type='file' hidden id='btnUpload' />
                    </div>
                    <br />
                    {/* <Button type = 'primary'>Upload Avatar</Button> */}
                </> :
                    <>
                        <p>Không có dữ liệu</p>
                    </>}
            </Drawer>
        </>
    )
}
export default ViewUserDetail

