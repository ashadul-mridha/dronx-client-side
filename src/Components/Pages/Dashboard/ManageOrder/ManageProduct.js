import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageProduct = ({order , cancelOrder}) => {

    const { _id , address , productId , name,   phone , status} = order ;

    
    const [product , setProduct] = useState({});

    useEffect( () => {
        axios.get(`https://immense-thicket-11021.herokuapp.com/product/${productId}`)
        .then( result => {
            setProduct(result.data);
        })
    } )

    const orderApproval = () => {
        axios.put('https://immense-thicket-11021.herokuapp.com/order/status', {_id})
        .then( res => {
            console.log(res);
            if(res.status === 200){
                window.location.reload();
                
                //notification
                toast.info('order Shipped Successfull!', {
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

    return (
        <tr key={_id}>
            <th> <img src={product.img}  height="110px" alt=""/>  </th>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>
                {
                    status ? (
                        <div className="btn btn-sm btn-success">Shipped</div>
                    ) : (
                        <>
                            <div className="btn btn-sm btn-danger">Pending</div>
                            <button onClick={orderApproval} className="btn btn-sm btn-success">Approved</button>
                        </>
                    )
                }
            </td>
            <td> <button onClick={ () => cancelOrder(_id)}  className="btn btn-danger">Cancel</button> </td>
            
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
        </tr>
    );
};

export default ManageProduct;