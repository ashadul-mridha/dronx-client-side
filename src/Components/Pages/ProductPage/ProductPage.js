import axios from 'axios';
import React, { useState , useEffect } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import SingleProduct from '../SingleProduct/SingleProduct';

const ProductPage = () => {
    const [products , setProducts] = useState([]);
    useEffect( () => {
        axios.get('https://immense-thicket-11021.herokuapp.com/products')
        .then( res => {
            setProducts(res.data);
        })
    })
    return (
        <div>
            <Header></Header>
            <div className="container my-4">
                <div className="row">
                    {
                        products.map( product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductPage;