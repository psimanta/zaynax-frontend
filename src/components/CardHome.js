import { useState } from "react";
import CartButton from "../components/CartButton";
import "./CardHome.css";
import { PRODUCT_ENDPOINT } from "../utils/apiUrl";

const CardHome = ({ item, setItemNo }) => {
    const [showCart, setShowCart] = useState(false);
    return (<div className="col-sm-2" onMouseOver={() => setShowCart(true)} onMouseLeave={() => setShowCart(false)}>
        <div className="product-card">
            {showCart ? <CartButton item={item} setItemNo={setItemNo} /> : (<div className="product-card-content">
                <div className="img-div">
                    <img src={`${PRODUCT_ENDPOINT}/image/${item._id}`} className="product-img-home" alt={item.name} />
                </div>
                <br />
                <div>
                    <h6>{item.name}</h6>
                    <br />
                    <h5>BDT.{item.price}<span className="discount">{item.discount}%</span></h5>
                </div>
            </div>)}

        </div>
    </div>);
}

export default CardHome;