import React from 'react';
import useAuth from '../../hooks/useAuth';
import logo from '../../../images/logo-default-286x60.png';

const Dashboard = () => {
    const {user , logOut} = useAuth()
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
                            <h5>Website</h5>
                            <h5>Dashboard</h5>
                            <h5>Pay</h5>
                            <h5>Link</h5>
                            <hr/>
                            <h5>{user.displayName}</h5>
                            <button onClick={logOut} className="btn btn-sm btn-light">Logout</button>
                        </div>
                        <div className="col-md-10">
                            <div className="m-5">
                                <div className="bg-danger p-3"><h1 className="text-start ">Dashboard</h1></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;