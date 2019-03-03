import './EditReviewListItem.css';
import React, {useEffect, useState} from 'react';

const EditReviewListItem = ({id = -1, name, comment, dispatch}) => {
    const [tempName, setTempName] = useState(name);
    const [tempComment, setTempComment] = useState(comment);

    function saveReview() {
        dispatch({type: 'saveReview', review: {id, name:tempName, comment: tempComment}});
        setTempName('');
        setTempComment('');
    }

    return (<div className="edit-review-list-item">

        <input type="text" className="name" placeholder="Your name" value={tempName} onChange={(event) => setTempName(event.target.value)}/>
        <input type="text" className="comment" placeholder="Your comment" value={tempComment} onChange={(event) => setTempComment(event.target.value)}/>

        <button className="add-button" onClick={saveReview}>Add</button>

    </div>);
};


export default EditReviewListItem;