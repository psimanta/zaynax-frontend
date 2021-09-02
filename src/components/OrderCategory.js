import "./OrderCategory.css";
import getColor from "../utils/getColor";


const OrderCategory = ({ name, setCategory, selected }) => {
    return (
        <div className="category"
            style={{
                backgroundColor: selected ? getColor(name)[0] : "",
                color: selected ? getColor(name)[1] : "",
            }}
            onClick={() => setCategory(name)} >
            <div className="text"> {name}</div>
        </div >
    )
}

export default OrderCategory;