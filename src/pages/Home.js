import { useState, useEffect } from "react";
import LayoutUser from "./LayoutUser";
import CardHome from "../components/CardHome";
import axios from "axios"
import { PRODUCT_ENDPOINT } from "../utils/apiUrl";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [itemNo, setItemNo] = useState(0)

    useEffect(() => {
        axios.get(PRODUCT_ENDPOINT)
            .then(response => {
                setProducts(response.data);
            })
        const cart = JSON.parse(localStorage.getItem("cart"))
        if (cart && cart.length) setItemNo(cart.length)
    }, [])

    return (
        <LayoutUser itemNo={itemNo} setItemNo={setItemNo}>
            <div className="row">
                {products ? products.map(item => <CardHome item={item} key={item._id} setItemNo={setItemNo} />) : ""}
            </div>
        </LayoutUser>
    )
}

export default Home;