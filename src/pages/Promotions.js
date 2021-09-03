import { Link } from "react-router-dom"
import Layout from "./Layout"
import Button from "../components/Button"

const Promotions = () => (
    <Layout>
        <div>
            <Link to="/add-promo">
                <Button
                    action="Add New Promo"
                    category="Add Product"
                    styleProps={{ boxShadow: "0px 3px 6px #8A8A8A19", width: "190px", margin: "0px", marginBottom: "25px" }}>Add New Product</Button>
            </Link>
        </div>
    </Layout>
)

export default Promotions;