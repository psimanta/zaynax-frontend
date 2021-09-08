import MyNavbar from "../parts/Navbar"
import Sidebar from "../parts/Sidebar"
import "./Layout.css";

const Layout = ({ children }) => (
    <div className="body">
        <MyNavbar />
        <div className="layout">
            <div className="row">
                <div className="col-sm-2">
                    <Sidebar />
                </div>
                <div className="col-sm-10 children">
                    {children}
                </div>
            </div>
        </div>
    </div>
)


export default Layout;