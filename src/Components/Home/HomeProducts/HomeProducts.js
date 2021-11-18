import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../../Pages/SingleProduct/SingleProduct';
import './HomeProducts.css';

const HomeProducts = () => {
    const [products , setProducts] = useState([]);
    useEffect( () => {
        axios.get('https://immense-thicket-11021.herokuapp.com/products')
        .then( res => {
            setProducts(res.data)
        })
    } , [])

    const sliceProducts = products?.slice(0,6);

    return (
        <div className="container my-5">
            <div className="d-flex flex-column align-items-center section-title">
                <h1><span style={{ color: '#fd7a6b'}}>Our</span> Products </h1>
                <p className="text-center">Discover the latest Technology trends with our newest arrivals. Find Drond, Drone Camera, Drone More Accessories and more. Shop online at Dronz Shop Bd Ltd And Buy Your Dream</p>
            </div>
            <div className="row g-3 my-4">
                {
                    sliceProducts.map( product =>  {
                        return(
                            <SingleProduct key={product._id} product={product}></SingleProduct>
                        )
                    } )
                }
                
            </div>
        </div>
    );
};

export default HomeProducts;