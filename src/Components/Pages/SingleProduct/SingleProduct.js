import React from 'react';
import {
    Link
} from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {_id , title , price , desc , img} = product;
    return (
        <div className="col-md-4 col-sm-6 col-xs-12 my-3">
            <div className=" d-flex flex-column align-items-center shadow-lg">
                <img alt="" className="img-fluid" src={img} />
                <div className="py-3 px-2">
                    <h4 className="my-4">{title}</h4>
                    <h5 className="text-danger">${price}</h5>
                    <p>{desc.slice(0,150)}</p>
                    <Link to={`product/${_id}`} className="btn btn-danger">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;