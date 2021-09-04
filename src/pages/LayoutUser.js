import Navbar from "../parts/Navbar"
import "./Layout.css";

const LayoutUser = ({ children }) => (
    <div className="body">
        <Navbar />
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