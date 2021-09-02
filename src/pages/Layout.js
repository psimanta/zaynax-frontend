import Navbar from "../parts/Navbar"
import "./Layout.css";

const Layout = ({ children }) => (
    <div className="body">
        <Navbar />
        <div className="layout">
            {children}
        </div>
    </div>
)


export default Layout;