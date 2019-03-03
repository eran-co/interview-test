import React from 'react';
import './ReviewsList.css';
import ReviewListItem from "../ReviewListItem/ReviewListItem";

const ReviewsList = ({reviews = []}) => {
    return (
        <React.Fragment>
            <div className="review-list-container">
                {reviews.map((review) => <ReviewListItem />)}
            </div>
        </React.Fragment>);
};



export default ReviewsList;