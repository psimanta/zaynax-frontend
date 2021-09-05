import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LayoutUser from "./LayoutUser";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import axios from "axios";
import { PROMO_ENDPOINT } from "../utils/apiUrl";
import "./Cart.css";

const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    const [itemNo, setItemNo] = useState(0);
    const [discountRate, setDiscount] = useState(0);
    const [checked, setChecked] = useState(1)

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart && cart.length) {
            setCartItems(cart);
            setItemNo(cart.length);
        }
    }, [])

    const handlePromo = () => {
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

    const subTotal = cartItems.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0);
    const totalShipping = cartItems.map(item => item.shipping).reduce((a, b) => a + b, 0);
    const discount = parseInt((subTotal + totalShipping) * discountRate / 100);
    const totalPayable = totalShipping + subTotal - discount;


    return (<LayoutUser itemNo={itemNo}>
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
                            onChange={() => setChecked(!checked)}
                            type="checkbox"
                        /> I agree to the Terms and Conditions, Privacy Policy and Refund Policy
                    </div>
                    <div className="col-sm-1 offset-sm-1"><button className="checkout-btn">Checkout</button></div>
                </div>
            </div>
            <div className="offset-sm-1 col-sm-3 cart-item">
                <h5>Order Summary</h5>
                <hr />
                Subtotal ({itemNo} items) {subTotal}
                <br />
                Discount {discount}
                <br />
                Shipping Charge {totalShipping}
                <br />
                Wallet Debit {0}
                <br />
                <hr className="dotted" />
                <input name="promo" id="promo" placeholder="Type Your Code" className="promo-input" />
                <button className="promo-btn" onClick={handlePromo}>Apply</button>
                <hr className="dotted" />
                Total Payable {totalPayable}
            </div>
        </div>

    </LayoutUser>)
}

export default Cart;