import { useState, useEffect } from "react";
import LayoutUser from "./LayoutUser";
import CardHome from "../components/CardHome";
import axios from "axios"
import { PRODUCT_ENDPOINT } from "../utils/apiUrl";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(PRODUCT_ENDPOINT)
            .then(response => {
                setProducts(response.data);
            })
    }, [])
    return (
        <LayoutUser>
            <div className="row">
                {products ? products.map(item => <CardHome item={item} key={item._id} />) : ""}
            </div>
        </LayoutUser>
    )
}

export default Home;