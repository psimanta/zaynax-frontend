import { isAuthenticated, userInfo } from "../utils/authUtils";
import "./Navbar.css"
import logo from "../Assets/logo.png";
const Navbar = () => (
    <div className="navbar">
        <img src={logo} alt="Logo" className="img" />
        {isAuthenticated() && userInfo().role === "admin" ? <a href="/orders">User Name</a> : ""}
    </div>
)


export default Navbar;