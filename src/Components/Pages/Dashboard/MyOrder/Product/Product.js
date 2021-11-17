import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Product = ({order}) => {

    const { _id , address , productId ,  phone , status} = order ;

    console.log(order);
    const [product , setProduct] = useState([]);

    useEffect( () => {
        axios.get(`http://localhost:5000/product/${productId}`)
        .then( result => {
            setProduct(result.data);
            console.log(result.data);
        })
    } ,[])
    
    return (
        <tr key={_id}>
            <th> <img src={product.img}  height="110px" alt=""/>  </th>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>
                {
                    status ? (
                        <button className="btn btn-sm btn-success">Shipped</button>
                    ) : (
                        <button className="btn btn-sm btn-danger">Pending</button>
                    )
                }
            </td>
            <td> <button className="btn btn-danger">Delete</button> </td>
        </tr>
    );
};

export default Product;