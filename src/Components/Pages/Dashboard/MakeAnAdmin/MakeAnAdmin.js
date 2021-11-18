import axios from 'axios';
import React, { useState } from 'react';

const MakeAnAdmin = () => {
    const [email , setEmail] = useState('');

    const handleEmail = e => {
        setEmail(e.target.value)
    }


    function handleSubmit(e){
        
        
        axios.put('http://localhost:5000/user',{email})
        .then( res => {
            console.log(res);
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
        </div>
    );
};

export default MakeAnAdmin;