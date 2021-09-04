import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { isAuthenticated, userInfo } from "../utils/authUtils";
import "./Navbar.css"
import logo from "../Assets/logo.png";

const Navbar = ({ itemNo }) => {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="img" />
            {
                isAuthenticated() && userInfo().role === "admin" ?
                    <a href="/orders">User Name</a>
                    :
                    (<span style={{ marginRight: "40px" }}><ShoppingCartOutlinedIcon fontSize="large" /> Cart <span className="itemNo"><center>{itemNo}</center></span>
                        <PersonOutlineOutlinedIcon fontSize="large" /></span>)
            }
        </div>
    )
}


export default Navbar;