import "./Sidebar.css";
import { Link } from "react-router-dom"

const Sidebar = () => (
    <div className="sidebar">
        <div className="link-group">
            <div className="link">Promotions</div>
            <div className="nested-link-group">
                <Link className="link" to="/promotions">Promo Codes</Link>
                <Link className="link" to="/add-promo">Add Promo Codes</Link>
            </div>
        </div>
        <div className="link-group">
            <Link className="link" to="/orders">Orders</Link>
            <Link className="link" to="/products">Products</Link>
        </div>
    </div>
)

export default Sidebar;