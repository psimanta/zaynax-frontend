import "./Navbar.css"
import logo from "../assets/logo.png";
const Navbar = () => (
    <div className="navbar">
        <img src={logo} alt="Logo" className="img" />
        <a href="#home">User Name</a>
    </div>
)


export default Navbar;