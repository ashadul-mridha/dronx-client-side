import React from 'react';
import logo from '../../../images/logo-default-286x60.png'

const Footer = () => {
    return (
        <div className="mt-5">
            <img src={logo} alt="" className="img-fluid"/>
            <p className="py-3 fw-bold"> & 2021 Drone . All rights reserved. Design by Ashadul Mridha</p>
        </div>
    );
};

export default Footer;