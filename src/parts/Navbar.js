import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { Nav, Navbar } from "react-bootstrap"
import { isAuthenticated, userInfo } from "../utils/authUtils";
import { setCartItemNo, getSearchProducts } from "../redux/actionCreators";
import { countCartItem } from "../utils/cartUtils";
import "./Navbar.css"
import logo from "../Assets/logo.png";


const mapStateToProps = ({ cartItemNo }) => {
    return {
        cartItemNo: cartItemNo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCartItemNo: (itemNo) => dispatch(setCartItemNo(itemNo)),
        getSearchProducts: (value) => dispatch(getSearchProducts(value))
    }
}

const MyNavbar = ({ history, cartItemNo, setCartItemNo, getSearchProducts }) => {
    const handleSearch = (e) => {
        getSearchProducts(e.target.value);
    }

    useEffect(() => {
        setCartItemNo(countCartItem())
    }, []);
    return (
        <Navbar fixed="top" bg="light" expand="lg">
            <img src={logo} alt="Logo" className="img" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
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
                                        <center>{cartItemNo}</center>
                                    </span>
                                </span>
                                <PersonOutlineOutlinedIcon fontSize="large" />
                            </span>)
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyNavbar));