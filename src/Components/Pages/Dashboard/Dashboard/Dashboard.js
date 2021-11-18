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
import AllProducts from '../Products/AllProducts/AllProducts';
import AddProducts from '../Products/AddProducts/AddProducts';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import ManageOrder from '../ManageOrder/ManageOrder';
import Review from '../Review/Review';
import AdminRoute from '../../../AdminRoute/AdminRoute';

const Dashboard = () => {
    const {user , logOut , isAdmin} = useAuth();
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

                        <div className="col-md-2 bg-danger mobile-display pt-5">
                            <NavLink className="text-decoration-none text-white fs-5 my-3" to="/home">Home</NavLink>
                            <br/>
                            <NavLink className="text-decoration-none text-white fs-5 my-3" to={`${url}`}>Dashboard</NavLink>
                            <br/>
                            {
                                !isAdmin ? (
                                    <> 
                                    <NavLink className="text-decoration-none text-white fs-5 my-3" to={`${url}/payment`}>Pay</NavLink>
                                    <br/>
                                    <NavLink className="text-decoration-none text-white fs-5 my-3" to={`${url}/myOrder`}>My Order</NavLink>
                                    <br/>
                                    <NavLink className="text-decoration-none text-white fs-5 my-3" to={`${url}/review`}>Review</NavLink>
                                    <br/>
                                    </>
                                ) : (
                                    <>
                                        <NavLink className="text-decoration-none text-white fs-5 my-3" to={`${url}/manageOrder`}>Manage All Order</NavLink>
                                        <br/>
                                        <NavLink className="text-decoration-none text-white fs-5 my-3" to={`${url}/AddProduct`}>Add A Product</NavLink>
                                        <br/>
                                        <NavLink className="text-decoration-none text-white fs-5 my-3" to={`${url}/products`}>Manage Products</NavLink>
                                        <br/>
                                        <NavLink className="text-decoration-none text-white fs-5 my-3" to={`${url}/makeAnAdmin`}>Make An Admin</NavLink>
                                       
                                    </>
                                )
                            }
                            
                            <hr/>
                            <h5>{user.displayName}</h5>
                            <button onClick={ () => logOut(history) } className="btn btn-sm btn-light mb-3">Logout</button>
                        </div>
                        <div className="col-md-10">
                            <div className="m-3">
                                {/* <div className="bg-danger p-3"><h1 className="text-start ">Dashboard</h1></div> */}
                                <Switch>
                                    <Route exact path={path}>
                                        <DashboardHome></DashboardHome>
                                    </Route>
                                    <Route path={`${path}/myOrder`}>
                                        <MyOrder></MyOrder>
                                    </Route>
                                    <Route path={`${path}/review`}>
                                        <Review></Review>
                                    </Route>
                                    <Route path={`${path}/payment`}>
                                        <Payment></Payment>
                                    </Route>
                                    <AdminRoute path={`${path}/manageOrder`}>
                                        <ManageOrder></ManageOrder>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/makeAnAdmin`}>
                                        <MakeAnAdmin></MakeAnAdmin>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/products`}>
                                        <AllProducts addProduct={`${url}/AddProduct`}></AllProducts>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/AddProduct`}>
                                        <AddProducts allProduct={`${url}/products`}></AddProducts>
                                    </AdminRoute>
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