import React from 'react';
import './Banner.css';
import heroImg from '../../../images/banner.png';

const Banner = () => {
    return (
        <div className="my-3 banner">
            <div className="row  align-items-center">
                <div className="col-sm-12 col-md-6 py-5">
                    <img src={heroImg} alt="" className="img-fluid"/>
                </div>
                <div className="col-sm-12 col-md-6 pe-5">
                    <h1>iStep Inspire 1 Pro</h1>
                    <p>Inspire 1 Pro by iStep is a precision-engineered drone which is specifically designed for easy flying, making it perfect to fly inside or to record action shots whilst on the move. Its foldable structure makes it an essential item for any adventure!</p>
                    <div className="ms-3">
                        <button className="btn-regular"> Buy Now </button>
                        <button className="btn-regular"> Learn More </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;