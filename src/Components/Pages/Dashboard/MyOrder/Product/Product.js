import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Product = ({order, cancelOrder}) => {

    const { _id , address , productId ,  phone , status} = order ;

    const [product , setProduct] = useState({});

    useEffect( () => {
        axios.get(`https://immense-thicket-11021.herokuapp.com/product/${productId}`)
        .then( result => {
            setProduct(result.data);
        })
    } ,[productId])

    
    
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
                        <div className="btn btn-sm btn-success">Shipped</div>
                    ) : (
                        <div className="btn btn-sm btn-danger">Pending</div>
                    )
                }
            </td>
            <td> <button onClick={ () => cancelOrder(_id)} className="btn btn-danger">Cancel</button> </td>
        </tr>
    );
};

export default Product;