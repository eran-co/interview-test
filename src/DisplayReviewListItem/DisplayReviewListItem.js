import React, {useEffect, useState} from 'react';
import './DisplayReviewListItem.css';
import imgGen from '@dudadev/random-img';
import {MdEdit, MdDelete} from 'react-icons/md';

const DisplayReviewListItem = ({id, name, comment, dispatch}) => {
    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
        imgGen({id}).then(avatarURL => setAvatarUrl(avatarURL));
    }, []);

    return (<div className="review-list-item">
        <img className="review-list-item-image" src={avatarUrl} alt=""/>
        <div className="review-list-item-details">
            <div className="name">{name}</div>
            <div className="comment">{comment}</div>
        </div>
        <div className="review-action-buttons"><MdEdit onClick={() => dispatch({type: 'editReview', id})} /> <MdDelete onClick={() => dispatch({type: 'deleteReview', id})} /></div>

    </div>);
};


export default DisplayReviewListItem;