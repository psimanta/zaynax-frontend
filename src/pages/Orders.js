import { useState } from "react";
import Layout from "./Layout";
import OrderCategory from "../components/OrderCategory";
import "./Orders.css";

const categories = ["All", "Pending", "Confirmed", "Cancelled"]

const Orders = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const setCategory = (name) => {
        setSelectedCategory(name);
    }

    return (
        <Layout>
            <div className="categories">
                {categories.map(item => <OrderCategory
                    name={item}
                    setCategory={setCategory}
                    selected={selectedCategory === item}
                    key={item}
                />)}
                {console.log(selectedCategory)}
            </div>
            <div>

            </div>
        </Layout>
    )
}

export default Orders;