import Main from "./pages/Main";
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
    </Switch>
  </Router>;

};

export default App;