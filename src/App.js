import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AllProducts from './Components/Pages/AllProducts/AllProducts';

function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/products">
              <AllProducts></AllProducts>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
