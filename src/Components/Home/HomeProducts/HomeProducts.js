import React from 'react';
import './HomeProducts.css';
import pro1 from '../../../images/prod-1.jpg';
import pro2 from '../../../images/prod-2.jpg';
import pro3 from '../../../images/prod-3.jpg';

const HomeProducts = () => {
    return (
        <div className="container my-5">
            <div className="d-flex flex-column align-items-center section-title">
                <h1><span style={{ color: '#fd7a6b'}}>Our</span> Products </h1>
                <p className="text-center">Discover the latest Technology trends with our newest arrivals. Find Drond, Drone Camera, Drone More Accessories and more. Shop online at Dronz Shop Bd Ltd And Buy Your Dream</p>
            </div>
            <div className="row g-3 my-4">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className=" d-flex flex-column align-items-center shadow-lg">
                        <img alt="" className="img-fluid" src={pro1} />
                        <h4 className="my-4">POWERFUL ANTENNA</h4>
                        <p>Thanks to the high-quality omnidirectional 5.8 GHz antenna, our drones can receive the signal from almost any distance and location.</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className=" d-flex flex-column align-items-center shadow-lg">
                        <img alt="" className="img-fluid" src={pro2} />
                        <h4 className="my-4">30-MINUTE FLIGHT TIME</h4>
                        <p>With extended battery capacity, we guarantee long flight time that will help make great use of your favorite drone  battery capacity.</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 ">
                    <div className="d-flex flex-column align-items-center shadow-lg">
                        <img alt="" className="img-fluid" src={pro3} />
                        <h4 className="my-4">FLIGHT CONTROL</h4>
                        <p>Our new drones have an improved set of sensors that give them better control even in the most complex environment and situations.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;