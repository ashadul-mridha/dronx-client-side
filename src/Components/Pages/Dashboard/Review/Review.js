import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

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
            console.log(res);
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
                    <input onBlur={handleRating} className="form-control" type="text" placeholder="Enter Rating out of (0-5)" />
                    <br/>
                    <input onBlur={handleReview} className="form-control py-3" type="text" placeholder="Your Review" />
                    <br/>
                    <button className="btn btn-danger" type="submit">Add Review</button>
                </form>
            </div>
        </div>
    );
};

export default Review;