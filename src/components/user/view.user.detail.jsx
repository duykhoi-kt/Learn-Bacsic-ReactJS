import { Drawer } from 'antd';
import PropTypes from 'prop-types';

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

    return (
        <>

            <Drawer
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
                </> :
                    <>
                        <p>Không có dữ liệu</p>
                    </>}
            </Drawer>
        </>
    )
}
export default ViewUserDetail

ViewUserDetail.propTypes = {
    dataDetail: PropTypes.shape({
        _id: PropTypes.string,
        fullName: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
    }),
    setDataDetail: PropTypes.func.isRequired,
    isDetailOpen: PropTypes.bool.isRequired,
    setIsDetailOpen: PropTypes.func.isRequired,
};