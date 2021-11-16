import React from 'react';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../../images/logo-default-286x60.png';

import {
    Switch,
    Route,
    useRouteMatch,
    useHistory,
    NavLink
  } from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAnAdmin from '../MakeAnAdmin/MakeAnAdmin';
import AllProducts from '../../AllProducts/AllProducts';
import AddProducts from '../Products/AddProducts/AddProducts';

const Dashboard = () => {
    const {user , logOut} = useAuth();
    const history = useHistory();
    
    let { path, url } = useRouteMatch();

    return (
        <div className="container">
            <div className="row desktop-dashboard">
                <div className="col-md-12 py-3 bg-secondary">
                    <div className="row">
                        <div className="col-md-2">
                            <img src={logo} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-10">
                            <h4 className="text-white">{user.displayName} Dashboard</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="row vh-100">

                        <div className="col-md-2 bg-danger pt-5">
                            <NavLink className="text-decoration-none text-white" to="/home">Home</NavLink>
                            <br/>
                            <NavLink className="text-decoration-none text-white" to={`${url}`}>Dashboard</NavLink>
                            <br/>
                            <NavLink className="text-decoration-none text-white" to={`${url}/products`}>Products</NavLink>
                            <br/>
                            <NavLink className="text-decoration-none text-white" to={`${url}/makeAnAdmin`}>Make An Admin</NavLink>
                            
                            <hr/>
                            <h5>{user.displayName}</h5>
                            <button onClick={ () => logOut(history) } className="btn btn-sm btn-light">Logout</button>
                        </div>
                        <div className="col-md-10">
                            <div className="m-3">
                                {/* <div className="bg-danger p-3"><h1 className="text-start ">Dashboard</h1></div> */}
                                <Switch>
                                    <Route exact path={path}>
                                        <DashboardHome></DashboardHome>
                                    </Route>
                                    <Route path={`${path}/makeAnAdmin`}>
                                        <MakeAnAdmin></MakeAnAdmin>
                                    </Route>
                                    <Route path={`${path}/products`}>
                                        <AllProducts addProduct={`${url}/AddProduct`}></AllProducts>
                                    </Route>
                                    <Route path={`${path}/AddProduct`}>
                                        <AddProducts allProduct={`${url}/products`}></AddProducts>
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;