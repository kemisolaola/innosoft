import Main from "./pages/Main";
import Product from "./pages/Product";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return <Router>
    <Switch>
    <Route exact path="/">
        <Main/>
      </Route>
      <Route exact  path="/product">
        <Product/>
      </Route>
    </Switch>
  </Router>;

};

export default App;