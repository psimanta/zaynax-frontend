import Navbar from "../parts/Navbar"
import "./Layout.css";

const LayoutUser = ({ children, itemNo }) => (
    <div className="body">
        <Navbar itemNo={itemNo} />
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