import { addToCart } from "../utils/cartUtils";

const CartButton = ({ item, setItemNo }) => {
    return <div className="cart-btn-div">
        <center>
            <button onClick={() => { addToCart(item, setItemNo) }}>Add to Cart</button>
        </center>
    </div>
}

export default CartButton;