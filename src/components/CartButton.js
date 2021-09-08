import { connect } from "react-redux";
import { addToCart } from "../utils/cartUtils";
import { setCartItemNo } from "../redux/actionCreators";

const mapDispatchToProps = dispatch => {
    return {
        setCartItemNo: (itemNo) => dispatch(setCartItemNo(itemNo))
    }
}

const CartButton = ({ item, setCartItemNo }) => {
    return <div className="cart-btn-div">
        <center>
            <button onClick={() => { addToCart(item, setCartItemNo) }}>Add to Cart</button>
        </center>
    </div>
}

export default connect(null, mapDispatchToProps)(CartButton);