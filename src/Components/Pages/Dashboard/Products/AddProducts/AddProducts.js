import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddProducts = ({allProduct}) => {
    //use State of form
    const [title , setTitle] = useState('');
    const [price , setPrice] = useState('');
    const [desc , setDesc] = useState('');
    const [img , setImg] = useState('');

    //catch name
    const handleTitle = e => {
        setTitle(e.target.value);
    }
    //catch price
    const handlePrice = e => {
        setPrice(e.target.value);
    }
    //catch desc
    const handleDesc = e => {
        setDesc(e.target.value);
    }
    //catch img
    const handleImg = e => {
        setImg(e.target.value);
    }

    const handleSubmit = e => {

        const product = {
            title,
            price,
            desc,
            img
        }

        //inset product to database
        axios.post('https://immense-thicket-11021.herokuapp.com/product',{product})
        .then( res => {
            if(res.status === 200){
                alert('Product Added SuccessFully');
            }
        })


        e.preventDefault();
    }
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="bg-danger py-3">
                    <h1>Add Product</h1>
                </div>
            </div>
            <div className="col-md-12 my-2">
                <Link to={allProduct} className="btn btn-primary text-start">All products</Link>
                <form onSubmit={handleSubmit}>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <input onBlur={handleTitle} type="text" placeholder="Product Title" className="form-control"/>
                        </div>
                        <div className="col-md-6">
                            <input onBlur={handlePrice} type="number" placeholder="Product Price" className="form-control"/>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-12">
                            <textarea onBlur={handleDesc} type="text" placeholder="Product Description" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <input onBlur={handleImg} type="text" placeholder="Image Url" className="form-control"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-danger">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;