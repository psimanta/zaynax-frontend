import "./OrderRow.css";

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
            </td>
            <td>
                {order.status}
            </td>
        </tr>
    )
}

export default OrderRow;