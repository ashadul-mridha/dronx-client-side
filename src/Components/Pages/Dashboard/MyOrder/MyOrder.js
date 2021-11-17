import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const MyOrder = () => {
    const [orders , setOrders] = useState([]);
    useEffect( () => {
        axios.get('http://localhost:5000/orders')
        .then( result => {
            setOrders(result.data);
            console.log(result.data);
        })
    } ,[])
    // console.log(orders);

    


    return (
        <div className="row">
            <div className="bg-danger py-3">
                <h1>My Orders</h1>
            </div>
            <div className="col-md-12 my-2">
                <table className="table table-hover my-3">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map( order => {
                                return(
                                    <Product key={order._id} order={order}></Product>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;