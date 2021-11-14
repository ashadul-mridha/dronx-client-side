import React, { useState } from 'react';
import './Register.css';
import droneImg from '../../../images/prod-5.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import useFirebase from '../../hooks/useFirebase';
import { Link } from 'react-router-dom';

const Register = () => {
    const {registerWithEmail} = useFirebase();

    //get form value
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [pass , setPass] = useState('')

    const handleName = e => {
        const value = e.target.value;
        setName(value);
    }
    const handleEmail = e => {
        const value = e.target.value;
        setEmail(value);
    }
    const handlePass = e => {
        const value = e.target.value;
        setPass(value);
    }

    //create new user
    const handleRegisterSubmit = (e) => {
        registerWithEmail(name , email , pass)

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
                        <h1>Register Now</h1>
                        <form className="register-form" onSubmit={handleRegisterSubmit}>
                            <input onBlur={handleName} type="text" placeholder="Enter Your Name" className="form-control"/>
                            <br/>
                            <input onBlur={handleEmail} type="text" placeholder="Enter Your Email" className="form-control"/>
                            <br/>
                            <input onBlur={handlePass} type="password" placeholder="Enter Your PassWord" className="form-control"/>
                            <br/>
                            <button type="submit" className="btn btn-light">Register</button>
                        </form>
                        <Link style={{ textDecoration: 'none'}} to="/login">Want To Login?</Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;