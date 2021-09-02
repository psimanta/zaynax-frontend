import { useState } from "react";
import Layout from "./Layout";
import OrderCategory from "../components/OrderCategory";
import OrderRow from "../components/OrderRow";
import "./Orders.css";

const categories = ["All", "Pending", "Confirmed", "Cancelled"]

const Orders = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const orders = [
        { orderNo: 123456, price: 4200, status: "Pending" },
        { orderNo: 123453, price: 480, status: "Pending" }
    ]

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
                <table>
                    <thead>
                        <tr>
                            <th width="5%">SL</th>
                            <th>Order No</th>
                            <th>Item Price</th>
                            <th width="30%">Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((item, i) => <OrderRow order={item} key={i} sl={i} />)}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default Orders;