import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import Layout from "./Layout";
import Button from "../components/Button";
import PromoRow from "../components/PromoRow";
import axios from "axios";
import { PROMO_ENDPOINT } from "../utils/apiUrl";

const Promotions = () => {
    const [promos, setPromos] = useState([]);

    useEffect(() => {
        axios.get(PROMO_ENDPOINT)
            .then(response => {
                setPromos(response.data)
            })
            .catch(err => {
                alert("Something went wrong! Couldn't load promos!")
            })
    }, [])

    return (
        <Layout>
            <div>
                <Link to="/add-promo">
                    <Button
                        action="Add New Promo"
                        category="Add Product"
                        styleProps={{ boxShadow: "0px 3px 6px #8A8A8A19", width: "190px", margin: "0px", marginBottom: "25px" }}>Add New Product</Button>
                </Link>
            </div>
            <div>
                {promos ? promos.map(item => <PromoRow item={item} key={item._id} />) : ""}
            </div>
        </Layout>
    )
}

export default Promotions;