import "./Sidebar.css";
import { Link } from "react-router-dom"

const Sidebar = () => (
    <div className="sidebar">
        <Link className="link" to="/promotions">Promotion</Link>
        <Link className="link" to="/orders">Orders</Link>
        <Link className="link" to="/products">Products</Link>
    </div>
)

export default Sidebar;