import { Route, Switch } from "react-router-dom";
import Cart from "./Components/Cart";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import UpdateScreen from "./Components/UpdateScreen";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/update/:itemId" component={UpdateScreen} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
