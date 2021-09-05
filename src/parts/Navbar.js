import { withRouter } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { isAuthenticated, userInfo } from "../utils/authUtils";
import "./Navbar.css"
import axios from "axios";
import { PRODUCT_ENDPOINT } from "../utils/apiUrl";
import logo from "../Assets/logo.png";

const Navbar = ({ history, itemNo, setProducts }) => {
    const handleSearch = (e) => {
        axios.get(`${PRODUCT_ENDPOINT}/search?like=${e.target.value}`)
            .then(response => setProducts(response.data))
    }
    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="img" />
            {
                isAuthenticated() && userInfo().role === "admin" ?
                    <a href="/orders">User Name</a>
                    :
                    (<span>
                        <span>
                            <SearchIcon /><input placeholder="Search" className="search-input" onChange={handleSearch} />
                        </span>
                        <span onClick={() => {
                            history.push("/cart")
                        }} style={{ cursor: "pointer" }}>
                            <ShoppingCartOutlinedIcon fontSize="large" /> Cart
                            <span className="itemNo">
                                <center>{itemNo}</center>
                            </span>
                        </span>
                        <PersonOutlineOutlinedIcon fontSize="large" />
                    </span>)
            }
        </div>
    )
}


export default withRouter(Navbar);