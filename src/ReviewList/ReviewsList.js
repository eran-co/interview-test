import React, {useReducer} from 'react';
import './ReviewsList.css';
import ReviewListItem from "../ReviewListItem/ReviewListItem";
import EditReviewListItem from "../EditReviewListItem/EditReviewListItem";

function getNextIndex(reviews = []) {
    if (reviews.length === 0) {
        return 1;
    }

    const max = reviews.reduce(function (a, b) {
        return Math.max(a.id, b.id);
    });

    return max + 1;
}

function saveReviewsToLocalStorage (state) {
    localStorage.setItem('reviews', JSON.stringify(state.reviews));
}

function loadReviewsToLocalStorage () {
    try {
        return JSON.parse(localStorage.getItem('reviews'));

    } catch (e) {
        return [];
    }
}

function reducer(state, action) {
    let newState;
    switch (action.type) {
        case 'deleteReview':
            newState = {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.id),
            };
            saveReviewsToLocalStorage(newState);
            return newState;
            break;

        case 'saveReview':
            if (action.review.id === -1) {
                action.review.id = getNextIndex(state.reviews);
            }
            let reviews = state.reviews.filter(review => review.id !== action.review.id);
            reviews.push(action.review);

            newState = {
                ...state,
                reviews,
                editReviewId: undefined
            };
            saveReviewsToLocalStorage(newState);
            return newState;
            break;

        case 'editReview':
            return {
                ...state,
                editReviewId: action.id
            };

        default:
            throw new Error('Reducer error: action does not exist');
    }
}

const ReviewsList = () => {
    const [state, dispatch] = useReducer(reducer, {
        reviews: loadReviewsToLocalStorage()
    });
    return (
        <React.Fragment>
            <div className="review-list-container">
                {state.reviews.sort((a, b) => a.id - b.id).map((review) => <ReviewListItem key={review.id}
                                                                                           name={review.name}
                                                                                           id={review.id}
                                                                                           comment={review.comment}
                                                                                           dispatch={dispatch}
                                                                                           isEditMode={state.editReviewId === review.id}/>)}
                {!state.editReviewId && <EditReviewListItem dispatch={dispatch}/>}
            </div>
        </React.Fragment>);
};


export default ReviewsList;