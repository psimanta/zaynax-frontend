import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LayoutUser from "./LayoutUser";
import Button from "../components/Button";
import CartItem from "../components/CartItem";

const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    const [itemNo, setItemNo] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart && cart.length) {
            setCartItems(cart);
            setItemNo(cart.length);
        }
    }, [])

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
            <div className="col-sm-8">
                {cartItems && cartItems.map(item => <CartItem item={item} key={item._id} setCartItems={setCartItems} setItemNo={setItemNo} />)}
            </div>
            <div className="col-sm-4">
                Order Summary
                <hr />
            </div>
        </div>
    </LayoutUser>)
}

export default Cart;