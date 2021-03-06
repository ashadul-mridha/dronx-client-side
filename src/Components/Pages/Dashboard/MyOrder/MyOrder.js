import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Product from './Product/Product';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyOrder = () => {
    const {user} = useAuth();

    const [orders , setOrders] = useState([]);
    useEffect( () => {
        axios.get('https://immense-thicket-11021.herokuapp.com/orders')
        .then( result => {
            setOrders(result.data);
        })
    } ,[])

    
    const myOrder = orders?.filter( order => order.email === user.email);
    // console.log(myOrder);

    //cancel order
    const cancelOrder = id => {
        const isCancel = window.confirm('Are You Sure Cancel Order');
        if(isCancel){
            axios.delete(`https://immense-thicket-11021.herokuapp.com/order/${id}`)
            .then( res => {
                if(res.status === 200){
                    const currentOrder = myOrder.filter( order => order._id !== id);
                    setOrders(currentOrder);
                    toast.success('Order Cancel SuccessFull!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
        }
    }

    return (
        <div className="row">
            <div className="bg-danger py-3">
                <h1>My Orders</h1>
            </div>
            <div className="col-md-12 my-2">
                <div className="table-responsive">
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
                                myOrder?.map( order => {
                                    return(
                                        <Product key={order._id} cancelOrder={cancelOrder} order={order}></Product>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default MyOrder;