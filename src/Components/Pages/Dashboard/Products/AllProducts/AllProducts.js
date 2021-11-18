import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';


const AllProducts = ({addProduct}) => {

    const [products , setProducts] = useState([]);

    useEffect( () => {
        axios.get('https://immense-thicket-11021.herokuapp.com/products')
        .then( res => {
            setProducts(res.data);
        })
    } , [])

    const handleDeleteProduct = (productId) => {

        const isAggre = window.confirm('Are You Sure Delete this Product');
        
        if(isAggre){
            axios.delete(`https://immense-thicket-11021.herokuapp.com/product/${productId}`)
            .then( res => {
                console.log(res);
                if(res.status === 200){
                    const currentProducts = products.filter( product =>  product._id !== productId)
                    setProducts(currentProducts)
                }
            })
        }
        
        

    }


    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="bg-danger py-3">
                    <h1>All Products</h1>
                </div>
            </div>
            <div className="col-md-12 my-2">
                <Link to={addProduct} className="btn btn-danger text-start">Add products</Link>
                <div className="table-responsive">
                    <table className="table table-striped table-hover my-3">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Desc</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map( product => {
                                    return(
                                        <SingleProduct handleDeleteProduct={handleDeleteProduct}  key={product._id} product={product}></SingleProduct>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;