import "./OrderRow.css";
import Button from "./Button";

const OrderRow = ({ order, sl }) => {
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
                        <Button action="Confirm" category="Confirmed" />
                        <Button action="Cancel" category="Cancelled" />
                    </span> : ""}
            </td>
            <td>
                {order.status}
            </td>
        </tr>
    )
}

export default OrderRow;