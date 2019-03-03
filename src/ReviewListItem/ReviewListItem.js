import React, {useEffect, useState} from 'react';
import './ReviewListItem.css';
import imgGen from '@dudadev/random-img';
import {MdEdit, MdDelete} from 'react-icons/md';

const ReviewListItem = ({id, name, comment, dispatch}) => {
    const [tempName, setTempName] = useState(name);
    const [tempComment, setTempComment] = useState(comment);
    const [avatarUrl, setAvatarUrl] = useState('');
    useEffect(() => {
        imgGen({id}).then(avatarURL => setAvatarUrl(avatarURL));
    }, [])
    return (<div className="review-list-item">
        <img className="review-list-item-image" src={avatarUrl} alt=""/>
        <div className="review-list-item-details">
            <div className="name">{tempName}</div>
            <div className="comment">{tempComment}</div>
        </div>
        <div className="review-action-buttons"><MdEdit onClick={() => {}} /> <MdDelete onClick={() => dispatch({type: 'deleteReview', id})} /></div>

    </div>);
};


export default ReviewListItem;