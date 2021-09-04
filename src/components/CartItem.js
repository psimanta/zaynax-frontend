import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { PRODUCT_ENDPOINT } from "../utils/apiUrl";
import { removeFromCart } from "../utils/cartUtils"
import "./CartItem.css";
const CartItem = ({ item, setCartItems, setItemNo }) => {
    return (
        <div>
            <div className="row">
                <div className="col-sm-2">
                    <img src={`${PRODUCT_ENDPOINT}/image/${item._id}`} alt={item.name} className="cart-img" />
                </div>
                <div className="col-sm-4 content">
                    {item.name}
                    <div className="detail">
                        <br />
                        Color: {item.color}
                        Size: {item.size}
                        <br />
                        Product Price BDT.{item.price}
                    </div>
                </div>
                <div className="col-sm-3 content">
                    <div className="detail">
                        Shipping Method: EMS
                        Shipping Charge: {item.shipping}
                    </div>
                </div>
                <div className="col-sm-3 content">
                    <span style={{ float: "right", cursor: "pointer" }} onClick={() => { removeFromCart(item, setCartItems, setItemNo) }}>
                        <DeleteOutlinedIcon />
                    </span>
                    <div className="detail">
                        Quantity: EMS
                        <br />
                        Total Price: {item.shipping}
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CartItem;