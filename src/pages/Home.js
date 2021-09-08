import { connect } from "react-redux";
import LayoutUser from "./LayoutUser";
import CardHome from "../components/CardHome";


const mapStateToProps = ({ products }) => {
    return {
        products: products
    }
}

const Home = ({ products }) => {
    return (
        <LayoutUser>
            <div className="row">
                {products ? products.map(item => <CardHome item={item} key={item._id} />) : ""}
            </div>
        </LayoutUser>
    )
}

export default connect(mapStateToProps)(Home);