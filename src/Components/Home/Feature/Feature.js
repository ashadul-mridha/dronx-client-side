import React from 'react';
import './Feature.css';
import antenaImg from '../../../images/antena.png';
import chargeImg from '../../../images/charge.png';
import controlImg from '../../../images/control.png';

const Feature = () => {
    return (
        <div className="container my-5">
            <div className="d-flex flex-column align-items-center section-title">
                <h1>Drone <span style={{ color: '#fd7a6b'}}>Features</span> </h1>
                <p className="text-center">Our drones have a variety of useful features that make them stand out in comparison with other products on the market. From 4K camera to GPS navigation, each of our drones offers a wide set of benefits as well as unique design.</p>
            </div>
            <div className="row g-4 my-4">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className=" d-flex flex-column align-items-center shadow-lg px-4">
                        <img alt="" className="img-fluid" src={antenaImg} />
                        <h4 className="my-4">POWERFUL ANTENNA</h4>
                        <p>Thanks to the high-quality omnidirectional 5.8 GHz antenna, our drones can receive the signal from almost any distance and location.</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className=" d-flex flex-column align-items-center shadow-lg px-4">
                        <img alt="" className="img-fluid" src={chargeImg} />
                        <h4 className="my-4">30-MINUTE FLIGHT TIME</h4>
                        <p>With extended battery capacity, we guarantee long flight time that will help make great use of your favorite drone.</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 ">
                    <div className="d-flex flex-column align-items-center shadow-lg px-4">
                        <img alt="" className="img-fluid" src={controlImg} />
                        <h4 className="my-4">FLIGHT CONTROL</h4>
                        <p>Our new drones have an improved set of sensors that give them better control even in the most complex environment and situations.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Feature;