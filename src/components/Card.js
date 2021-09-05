import "./Card.css";
import { PRODUCT_ENDPOINT } from "../utils/apiUrl";

const Card = ({ item }) => {
    return (<div className="col-sm-3">
        <div className="product-card">
            <div className="product-card-content">
                <div className="img-div">
                    <img src={`${PRODUCT_ENDPOINT}}/image/${item._id}`} className="product-img" alt={item.name} />
                </div>
                <br />
                <div>
                    <h6>{item.name}</h6>
                    <h5>BDT.{item.price}<span className="discount">{item.discount}%</span></h5>
                </div>
            </div>
        </div>
    </div>);
}

export default Card;