import { Link } from "react-router-dom"
import Layout from "./Layout"
import Button from "../components/Button"

const Products = () => (
    <Layout>
        <div>
            <Link to="/add-product">
                <Button
                    action="Add New Product"
                    category="Add Product"
                    styleProps={{ boxShadow: "0px 3px 6px #8A8A8A19", width: "190px" }}>Add New Product</Button>
            </Link>
        </div>
        <div>

        </div>
    </Layout>
)

export default Products