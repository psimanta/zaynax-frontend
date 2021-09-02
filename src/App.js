import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Products from "./pages/Products";
import Promotions from "./pages/Promotions";
import Orders from "./pages/Orders";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/promotions" exact component={Promotions} />
        <Route path="/products" exact component={Products} />
        <Route path="/orders" exact component={Orders} />
      </Switch>
    </div>
  );
}

export default App;
