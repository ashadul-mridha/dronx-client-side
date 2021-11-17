import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import NotFound from './Components/Pages/NotFound/NotFound';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Pages/Dashboard/Dashboard/Dashboard';
import ProductPage from './Components/Pages/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/productsPage">
                <ProductPage></ProductPage>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="/dashboard">
                <Dashboard></Dashboard>
              </Route>
              <PrivateRoute path="/product/:id">
                <ProductDetails></ProductDetails>
              </PrivateRoute>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
