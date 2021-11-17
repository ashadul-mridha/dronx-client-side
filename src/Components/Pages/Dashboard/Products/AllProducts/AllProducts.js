import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const AllProducts = ({addProduct}) => {

    const [products , setProducts] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:5000/products')
        .then( res => {
            setProducts(res.data);
        })
    } , [])

    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="bg-danger py-3">
                    <h1>All Products</h1>
                </div>
            </div>
            <div className="col-md-12 my-2">
                <Link to={addProduct} className="btn btn-danger text-start">Add products</Link>
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
                                    <tr key={product._id}>
                                        <th> <img src={product.img} className="img-fluid" alt=""/>  </th>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>{product.desc}</td>
                                        <td> <button className="btn btn-sm btn-danger">Delete</button> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;