import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MakeAnAdmin = () => {
    const [email , setEmail] = useState('');

    const handleEmail = e => {
        setEmail(e.target.value)
    }


    function handleSubmit(e){
        
        
        axios.put('https://immense-thicket-11021.herokuapp.com/user',{email})
        .then( res => {
            if(res.status === 200){
                //notification
                toast.warn(`${email} this email Make Admin`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        })
        e.preventDefault();
    }

    return (
        <div className="row">
            <div className="bg-danger py-3">
                <h1>Make An Admin</h1>
            </div>
            <div className="col-sm-12">
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleEmail} type="email" placeholder="Enter email to make admin" className="form-control border-2 border-danger mt-2"/>
                    <br/>
                    <button type="submit" className="btn btn-danger">Make Admin</button>
                </form>
            </div>
            
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default MakeAnAdmin;