import MyNavbar from "../parts/Navbar"
import "./Layout.css";

const LayoutUser = ({ children }) => (
    <div>
        <MyNavbar />
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