import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Layout from "./Layout"
import Button from "../components/Button"
import Card from "../components/Card";
import axios from "axios"
import { PRODUCT_ENDPOINT } from "../utils/apiUrl";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(PRODUCT_ENDPOINT)
            .then(response => {
                setProducts(response.data);
            })
    }, [])
    return (
        <Layout>
            <div>
                <Link to="/add-product">
                    <Button
                        action="Add New Product"
                        category="Add Product"
                        styleProps={{ boxShadow: "0px 3px 6px #8A8A8A19", width: "190px", margin: "0px", marginBottom: "25px" }}>Add New Product</Button>
                </Link>
            </div>
            <div className="row">
                {products ? products.map(item => <Card item={item} key={item._id} />) : ""}
            </div>
        </Layout>
    )
}

export default Products