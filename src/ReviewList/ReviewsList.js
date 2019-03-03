import React, {useReducer} from 'react';
import './ReviewsList.css';
import ReviewListItem from "../ReviewListItem/ReviewListItem";
import EditReviewListItem from "../EditReviewListItem/EditReviewListItem";

function getNextIndex(reviews = []) {
    if (reviews.length === 0) {
        return 1;
    }

    const max = reviews.reduce(function(a, b) {
        return Math.max(a.id, b.id);
    });

    return max + 1;
}

function reducer(state, action) {
    switch (action.type) {
        case 'deleteReview':
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.id),
            };

        case 'saveReview':
        if (action.review.id === -1) {
            action.review.id = getNextIndex(state.reviews);
        }
        let reviews = state.reviews.filter(review => review.id !== action.review.id);
        reviews.push(action.review);

        return {
            ...state,
            reviews,
        };

        default:
            throw new Error('Reducer error: action does not exist');
    }
}

const ReviewsList = () => {
    const [state, dispatch] = useReducer(reducer, {reviews: [
        {name: 'eran', comment: 'this is great', id: 1},
        {name: 'lala', comment: 'this is great', id: 2}]
    });
    return (
        <React.Fragment>
            <div className="review-list-container">
                {state.reviews.map((review) => <ReviewListItem key={review.id} name={review.name} id={review.id} comment={review.comment} dispatch={dispatch}/>)}
                <EditReviewListItem dispatch={dispatch}/>
            </div>
        </React.Fragment>);
};



export default ReviewsList;