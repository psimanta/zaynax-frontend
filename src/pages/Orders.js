import { useState, useEffect } from "react";
import Layout from "./Layout";
import OrderCategory from "../components/OrderCategory";
import OrderRow from "../components/OrderRow";
import axios from "axios";
import { ORDER_ENDPOINT } from "../utils/apiUrl";
import "./Orders.css";

const categories = ["All", "Pending", "Confirmed", "Cancelled"]

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        axios.get(ORDER_ENDPOINT)
            .then(response => setOrders(response.data))
    }, []);

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
                            <th width="18%">Item Price</th>
                            <th width="30%">Action</th>
                            <th width="20%">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedCategory === "All" && orders ?
                            orders.map((item, i) => (<OrderRow order={item} key={i} sl={i} />)) :
                            orders.filter(item => item.status === selectedCategory).map((item, i) => (<OrderRow order={item} key={i} sl={i} />))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default Orders;