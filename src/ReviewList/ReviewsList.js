import React, {useReducer} from 'react';
import './ReviewsList.css';
import ReviewListItem from "../ReviewListItem/ReviewListItem";

function reducer(state, action) {
    switch (action.type) {

        default:
            throw new Error('Reducer error: action does not exist');
    }
}

const ReviewsList = () => {
    const [state, dispatch] = useReducer(reducer, {reviews: [{name: 'eran', comment: 'this is great', avatar: 'sdsdsd'}]});
    return (
        <React.Fragment>
            <div className="review-list-container">
                {state.reviews.map((review) => <ReviewListItem review={review}/>)}
            </div>
        </React.Fragment>);
};



export default ReviewsList;