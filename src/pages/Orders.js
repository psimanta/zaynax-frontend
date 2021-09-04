import { useState, useEffect } from "react";
import Layout from "./Layout";
import OrderCategory from "../components/OrderCategory";
import OrderRow from "../components/OrderRow";
import { getOrders } from "../utils/orderUtils";
import "./Orders.css";

const categories = ["All", "Pending", "Confirmed", "Cancelled"]

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        getOrders(setOrders);
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
                            orders.map((item, i) => (<OrderRow order={item} key={i} sl={i} setOrders={setOrders} />)) :
                            orders.filter(item => item.status === selectedCategory).map((item, i) => (<OrderRow order={item} key={i} sl={i} setOrders={setOrders} />))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default Orders;