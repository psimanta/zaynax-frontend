import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import { PRODUCT_ENDPOINT } from "../utils/apiUrl";
import { removeFromCart, increase, decrease } from "../utils/cartUtils"
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
                        Quantity:
                        <span className="quantity">
                            <span className="updateIcon" onClick={() => increase(item, setCartItems)}>
                                <AddOutlinedIcon fontSize="small" />
                            </span>{item.quantity}
                            <span className="updateIcon" onClick={() => decrease(item, setCartItems)}>
                                <RemoveOutlinedIcon fontSize="small" />
                            </span>
                        </span>
                        <br />
                        Total Price: {item.price * item.quantity + item.shipping}
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CartItem;