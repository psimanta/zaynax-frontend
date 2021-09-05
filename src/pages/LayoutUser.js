import Navbar from "../parts/Navbar"
import "./Layout.css";

const LayoutUser = ({ children, itemNo, setProducts }) => (
    <div className="body">
        <Navbar itemNo={itemNo} setProducts={setProducts} />
        <div className="layout-user">
            <div className="row">
                <div className="col-sm-12 children">
                    {children}
                </div>
            </div>
        </div>
    </div>
)


export default LayoutUser;