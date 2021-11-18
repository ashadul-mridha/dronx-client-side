import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageProduct = ({order , cancelOrder}) => {

    const { _id , address , productId , name,   phone , status} = order ;

    
    const [product , setProduct] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:5000/product/${productId}`)
        .then( result => {
            setProduct(result.data);
        })
    } )

    const orderApproval = () => {
        axios.put('http://localhost:5000/order/status', {_id})
        .then( res => {
            console.log(res);
            if(res.status === 200){
                window.location.reload();
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
        </tr>
    );
};

export default ManageProduct;