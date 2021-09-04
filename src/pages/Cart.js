import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LayoutUser from "./LayoutUser";
import Button from "../components/Button";
import axios from "axios"
import { PRODUCT_ENDPOINT } from "../utils/apiUrl";

const Cart = () => {
    return (<LayoutUser>
        <div>
            <Link to="/">
                <Button
                    action="Go Back"
                    category="Add Product"
                    styleProps={{ boxShadow: "0px 3px 6px #8A8A8A19", margin: "0px", marginBottom: "25px", width: "100px" }}>Go Back</Button>
            </Link>
        </div>
        <div className="row">
            <div className="col-sm-9">My Cart</div>
            <div className="col-sm-3">Summary</div>
        </div>
    </LayoutUser>)
}

export default Cart;