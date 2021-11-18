import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {
    const {user} = useAuth();

    //get form data
    const [ratingValue , setRatingValue] = useState('');
    const [review , setReview] = useState('');

    const handleRating = e => {
        setRatingValue(e.target.value)
    }

    const handleReview = e => {
        setReview(e.target.value)
    }
    
    const handleReviewData = e => {

        const reviewData = {
            email : user.email,
            name : user.displayName,
            ratingValue,
            review
        }
        
        axios.post('https://immense-thicket-11021.herokuapp.com/review' , {reviewData})
        .then( res => {
            if(res.status === 200){
                toast.success('Thanks For Your Review', {
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

        e.preventDefault();
    }
    return (
        <div className="row">
            <div className="bg-danger py-3">
                <h1>My Review</h1>
            </div>
            <div className="col-sm-12 mt-3">
                <form onSubmit={handleReviewData}>
                    <h2>Add A Review</h2>
                    <input className="form-control" type="text" value={user.email} disabled/>
                    <br/>
                    <input className="form-control" type="text" value={user.displayName} disabled/>
                    <br/>
                    <input onBlur={handleRating} className="form-control" type="text" placeholder="Enter Rating (a number between 0-5)" />
                    <br/>
                    <input onBlur={handleReview} className="form-control py-3" type="text" placeholder="Your Review" />
                    <br/>
                    <button className="btn btn-danger" type="submit">Add Review</button>
                </form>
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

export default Review;