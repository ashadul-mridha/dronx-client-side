import React, { useState } from 'react';
import './Login.css';
import droneImg from '../../../images/prod-3.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const {loginWithEmail} = useFirebase();

    //get form value
    const [email , setEmail] = useState('')
    const [pass , setPass] = useState('')

    const handleEmail = e => {
        const value = e.target.value;
        setEmail(value);
    }
    const handlePass = e => {
        const value = e.target.value;
        setPass(value);
    }

    //create new user
    const handleLoginSubmit = (e) => {
        
        loginWithEmail(email , pass)

        e.preventDefault();
    }
    return (
        <>
            <Header></Header>
            <div className="container my-4">
                <div className="row align-items-center g-0">
                    <div className="col-md-6 col-sm-12">
                        <img src={droneImg} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h1>Login Now</h1>
                        <form className="login-form" onSubmit={handleLoginSubmit}>
                            <input onBlur={handleEmail} type="text" placeholder="Enter Your Email" className="form-control"/>
                            <br/>
                            <input onBlur={handlePass} type="password" placeholder="Enter Your PassWord" className="form-control"/>
                            <br/>
                            <button type="submit" className="btn btn-light">Login</button>
                        </form>
                        <Link style={{ textDecoration: 'none'}} to="/register">Already Register?</Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;