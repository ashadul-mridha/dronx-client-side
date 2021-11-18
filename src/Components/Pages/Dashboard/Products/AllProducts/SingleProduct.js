import React from 'react';

const SingleProduct = ({product , handleDeleteProduct}) => {
    
    
    return (
        <tr key={product._id}>
            <th> <img src={product.img} className="img-fluid" alt=""/>  </th>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.desc}</td>
            <td> <button onClick={ () => handleDeleteProduct(product._id)} className="btn btn-sm btn-danger">Delete</button> </td>
        </tr>
    );
};

export default SingleProduct;