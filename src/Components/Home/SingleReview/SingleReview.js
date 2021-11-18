import React from 'react';
import Rating from 'react-rating';

const SingleReview = ({singleReview}) => {
    const { name , ratingValue , review} = singleReview;
    
    return (
        <div className="col-md-6 col-sm-12 my-2">
            <div className="shadow-lg py-3 px-2">
                <h1>{name}</h1>
                <Rating
                    style={{ color: '#fd7a6b'}}
                    initialRating={ratingValue}
                    readonly
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                />
                <p>{review}</p>
            </div>
        </div>
    );
};

export default SingleReview;