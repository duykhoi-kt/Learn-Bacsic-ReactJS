import './header.css'
const header = () => {
    return (
        <ul>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/products">Products</a></li>
        </ul>
    )
}

export default header