import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Products from "./pages/Products";
import Promotions from "./pages/Promotions";
import Orders from "./pages/Orders";
import AddPromo from "./pages/AddPromo";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/promotions" exact component={Promotions} />
        <Route path="/add-promo" exact component={AddPromo} />
        <Route path="/products" exact component={Products} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/add-product" exact component={AddProduct} />
      </Switch>
    </div>
  );
}

export default App;
