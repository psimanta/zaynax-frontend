import Navbar from "../parts/Navbar"
import "./Layout.css";

const LayoutUser = ({ children, itemNo, setProducts }) => (
    <div>
        <Navbar itemNo={itemNo} setProducts={setProducts} />
        <div className="body">
            <div className="layout-user">
                <div className="row">
                    <div className="col-sm-12 children">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default LayoutUser;