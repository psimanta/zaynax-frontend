import { Switch, Route } from "react-router-dom";
import AdminRoute from "./protectedRoutes/AdminRoute";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Products from "./pages/Products";
import Promotions from "./pages/Promotions";
import Orders from "./pages/Orders";
import AddPromo from "./pages/AddPromo";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/admin-login" exact component={AdminLogin} />
        <AdminRoute path="/promotions" exact>
          <Promotions />
        </AdminRoute>
        <AdminRoute path="/add-promo" exact>
          <AddPromo />
        </AdminRoute>
        <AdminRoute path="/products" exact>
          <Products />
        </AdminRoute>
        <AdminRoute path="/orders" exact>
          <Orders />
        </AdminRoute>
        <AdminRoute path="/add-product" exact>
          <AddProduct />
        </AdminRoute>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
