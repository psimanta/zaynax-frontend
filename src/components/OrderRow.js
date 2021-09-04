import "./OrderRow.css";
import Button from "./Button";
import axios from "axios";
import { ORDER_ENDPOINT } from "../utils/apiUrl";
import { getOrders } from "../utils/orderUtils";

const updateOrder = (id, status, setOrders) => {
    const token = null
    axios.patch(`${ORDER_ENDPOINT}/${id}`, { status: status }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(response => {
            getOrders(setOrders);
        })
}

const OrderRow = ({ order, sl, setOrders }) => {
    return (
        <tr className="orderRow">
            <td>
                {sl + 1}
            </td>
            <td>
                {order.orderNo}
            </td>
            <td>
                {order.price}
            </td>
            <td>
                {order.status === "Pending" ?
                    <span>
                        <Button action="Confirm" category="Confirmed" cb={() => updateOrder(order._id, "Confirmed", setOrders)} />
                        <Button action="Cancel" category="Cancelled" cb={() => updateOrder(order._id, "Cancelled", setOrders)} />
                    </span> : ""}
            </td>
            <td>
                {order.status}
            </td>
        </tr>
    )
}

export default OrderRow;