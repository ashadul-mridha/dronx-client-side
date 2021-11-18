import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';

const ManageOrder = () => {

    
    const [orders , setOrders] = useState([]);
    useEffect( () => {
        axios.get('https://immense-thicket-11021.herokuapp.com/orders')
        .then( result => {
            setOrders(result.data);
        })
    } ,[])

     //cancel order
     const cancelOrder = id => {
        const isCancel = window.confirm('Are You Sure Cancel Order');
        if(isCancel){
            axios.delete(`https://immense-thicket-11021.herokuapp.com/order/${id}`)
            .then( res => {
                if(res.status === 200){
                    const currentOrder = orders.filter( order => order._id !== id);
                    setOrders(currentOrder);
                }
            })
        }
    }


    return (
        <div className="row">
            <div className="bg-danger py-3">
                <h1>Manage All Order</h1>
            </div>
            <div className="col-md-12 my-2">
                <div className="table-responsive">
                    <table className="table table-hover  my-3">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map( order => {
                                    return(
                                        <ManageProduct cancelOrder={cancelOrder} key={order._id}  order={order}></ManageProduct>
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

export default ManageOrder;