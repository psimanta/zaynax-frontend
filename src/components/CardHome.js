import "./Card.css";

const CardHome = ({ item }) => {
    return (<div className="col-sm-2">
        <div className="product-card">
            <div className="product-card-content">
                <div className="img-div">
                    <img src={`http://localhost:3001/api/v1/product/image/${item._id}`} className="product-img-home" alt={item.name} />
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

export default CardHome;