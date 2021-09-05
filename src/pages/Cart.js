import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import LayoutUser from "./LayoutUser";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import Modal from "../components/Modal";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import axios from "axios";
import { PROMO_ENDPOINT, ORDER_ENDPOINT } from "../utils/apiUrl";
import { isUserAuthenticated } from "../utils/authUtils";
import "./Cart.css";

const Cart = ({ history }) => {
    const [cartItems, setCartItems] = useState([])
    const [itemNo, setItemNo] = useState(0);
    const [discountRate, setDiscount] = useState(0);
    const [checked, setChecked] = useState(0)
    const [error, setError] = useState(false)
    const [showModal, setShowModal] = useState(false);

    const subTotal = cartItems.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0);
    const totalShipping = cartItems.map(item => item.shipping).reduce((a, b) => a + b, 0);
    const discount = parseInt((subTotal + totalShipping) * discountRate / 100);
    const totalPayable = totalShipping + subTotal - discount;

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart && cart.length) {
            setCartItems(cart);
            setItemNo(cart.length);
        }
    }, [])

    const handlePromo = () => {
        if (!isUserAuthenticated()) {
            history.push("/user-login")
        } else {
            const promo = document.getElementById("promo").value;
            axios.post(`${PROMO_ENDPOINT}/check`, { promo: promo }, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then(response => {
                    setDiscount(response.data.discount);
                })
                .catch(error => {
                    let errMsg = "Something went wrong!";
                    if (error.response) errMsg = error.response.data;
                    alert(errMsg);
                })
        }

    }

    const handleCheckout = () => {
        if (!checked) {
            setError(true);
        } else {
            if (isUserAuthenticated()) {
                const order = {
                    orderNo: parseInt(new Date().getTime() / 1000),
                    price: totalPayable
                }
                axios.post(`${ORDER_ENDPOINT}`, order, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                    .then(response => {
                        setShowModal(true)
                        localStorage.removeItem("cart");
                    })
            } else {
                history.push("/user-login")
            }
        }
    }




    return (<LayoutUser itemNo={itemNo}>
        {showModal ? (<Modal setShowModal={() => { setShowModal(false) }}><CheckCircleIcon fontSize="large"></CheckCircleIcon>
            <br />Your Order Placed
            <br /> Successfully
            <br />
            <Link to="/admin-login">
                <button className="go-to-admin">
                    Go to Admin Panel
                </button>
            </Link>
        </Modal>
        ) : ""}
        <div>
            <Link to="/">
                <Button
                    action="Go Back"
                    category="Add Product"
                    styleProps={{ boxShadow: "0px 3px 6px #8A8A8A19", margin: "0px", marginBottom: "25px", width: "100px" }}>Go Back</Button>
            </Link>
        </div>
        <div className="row">
            <div className="col-sm-8 cart-item">
                {cartItems && cartItems.map(item => <CartItem item={item} key={item._id} setCartItems={setCartItems} setItemNo={setItemNo} />)}
                <div className="row">
                    <div className="col-sm-9">
                        <input
                            checked={checked}
                            onChange={() => {
                                setChecked(!checked);
                                setError(false);
                            }}
                            type="checkbox"
                        /> I agree to the Terms and Conditions, Privacy Policy and Refund Policy
                        {error ? <p style={{ color: "red" }}>You must agree to the terms and condition!</p> : ""}
                    </div>
                    <div className="col-sm-1 offset-sm-1"><button className="checkout-btn" onClick={handleCheckout}>Checkout</button></div>
                </div>
            </div>
            <div className="offset-sm-1 col-sm-3 order-summary">
                <h5>Order Summary</h5>
                <hr />
                Subtotal ({itemNo} items) <span style={{ float: "right" }}>&#2547; {subTotal}</span>
                <br />
                Discount <span style={{ float: "right" }}>&#2547; {discount}</span>
                <br />
                Shipping Charge <span style={{ float: "right" }}>&#2547; {totalShipping}</span>
                <br />
                Wallet Debit <span style={{ float: "right" }}>&#2547; {0}</span>
                <br />
                <hr className="dotted" />
                <input name="promo" id="promo" placeholder="Type Your Code" className="promo-input" />
                <button className="promo-btn" onClick={handlePromo}>Apply</button>
                <hr className="dotted" />
                Total Payable <span style={{ float: "right" }}>&#2547; {totalPayable}</span>
            </div>
        </div>

    </LayoutUser>)
}

export default withRouter(Cart);