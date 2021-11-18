import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const HomeReview = () => {
    const [reviews , setReviews] = useState([]);
    useEffect( () => {
        axios.get('https://immense-thicket-11021.herokuapp.com/review')
        .then( res => {
            setReviews(res.data);
        })
    } , [])
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-12">
                    <h1  style={{ fontSize: '60px' , fontWeight: '700'}}><span style={{ color: '#fd7a6b'}}>Our</span> Reviews </h1>
                </div>
                {
                    reviews.map( singleReview => {
                        return(
                            <SingleReview key={singleReview._id} singleReview={singleReview}></SingleReview>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default HomeReview;