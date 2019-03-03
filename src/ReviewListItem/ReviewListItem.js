import React from 'react';
import './ReviewListItem.css';
import DisplayReviewListItem from "../DisplayReviewListItem/DisplayReviewListItem";
import EditReviewListItem from "../EditReviewListItem/EditReviewListItem";

const ReviewListItem = ({id, name, comment, dispatch, isEditMode}) => {
    const ListItemComponent = isEditMode ? EditReviewListItem : DisplayReviewListItem;
    return <ListItemComponent id={id} name={name} comment={comment} dispatch={dispatch}/>;
};


export default ReviewListItem;