import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AllProducts from './Components/Pages/AllProducts/AllProducts';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import NotFound from './Components/Pages/NotFound/NotFound';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider';

function App() {
  return (
    <AuthProvider className="App">
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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
