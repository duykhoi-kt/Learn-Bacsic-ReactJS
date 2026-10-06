import {  NavLink } from 'react-router-dom'
import './header.css'
const header = () => {
    return (
        <ul>
        {/* LINK là các liên kết đến các trang khác */}
            <li><NavLink  to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
        </ul>
    )
}

export default header