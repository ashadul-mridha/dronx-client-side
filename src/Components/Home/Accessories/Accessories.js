import React from 'react';
import './Accessories.css';
import Propulsion from '../../../images/Propulsion System.png';
import camera from '../../../images/Camerass.png'
import airfame from '../../../images/Airframe & Body Set.png';
import polarize from '../../../images/Polarizing Filters.png';

const Accessories = () => {
    return (
        <div className="container my-5">
            <div className="d-flex flex-column align-items-center section-title">
                <h1>Accessories <span style={{ color: '#fd7a6b'}}>Items</span> </h1>
                <p className="text-center">Besides offering top-notch aerial drones, we also provide our clients with a wide variety of accessories and components for their drones. Here are some of the most popular products available on our website for purchase and delivery.</p>
            </div>
            <div className="row g-4 my-4 align-items-center">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className=" d-flex flex-column align-items-center shadow-lg px-4">
                        <img alt="" className="img-fluid" style={{height:'145px'}} src={Propulsion} />
                        <h4 className="my-4">Propulsion System</h4>
                        <p className="text-danger fw-bold">$13</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className=" d-flex flex-column align-items-center shadow-lg px-4">
                        <img alt="" className="img-fluid" style={{height:'145px'}} src={camera} />
                        <h4 className="my-4">4K Camera</h4>
                        <p className="text-danger fw-bold">$1345</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 ">
                    <div className="d-flex flex-column align-items-center shadow-lg px-4">
                        <img alt="" className="img-fluid" style={{height:'145px'}} src={airfame} />
                        <h4 className="my-4">Airframe & Body</h4>
                        <p className="text-danger fw-bold">$1125</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 ">
                    <div className="d-flex flex-column align-items-center shadow-lg px-4">
                        <img alt="" className="img-fluid" style={{height:'145px'}} src={polarize} />
                        <h4 className="my-4">Polarizing Filters</h4>
                        <p className="text-danger fw-bold">$56</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Accessories;