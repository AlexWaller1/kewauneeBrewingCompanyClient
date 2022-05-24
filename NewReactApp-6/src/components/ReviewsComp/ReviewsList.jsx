import React from 'react'
import { useState } from 'react';

const ReviewsList = ({ reviews, deleteReview, editReview, isClicked }) => {

    const [newTitle, setNewTitle] = useState("");

    const [newText, setNewText] = useState("");

    const [newClick, setNewClick] = useState(false);

    let onSubmit = id => {

        if (newTitle == "" || newText == "") {
            console.log("please fill in input fields");
        }
        let editRev = {
            userId: id,
            title: newTitle,
            text: newText,
            clicked: newClick
        }

        editReview(editRev);

        

        let clone = [...reviews];

        for (let i = 0; i < clone.length; i++) {
            if (clone[i].userId == id) {
                clone[i].clicked = !clone[i].clicked;
            }
        }

        setNewTitle("");
        setNewText("");
    }

    
  return (
    <div className="rev-list-div-1">
        { reviews[0] == undefined ? <h1>No Reviews Posted</h1> : reviews.map(review =>
                review.clicked == false ?
                <div key={Math.random() * 100000} className="rev-list-div-2">
                <h1>{review.title}</h1>
                <h4>{review.text}</h4>
                <><button className='btn btn-primary' onClick={() => isClicked(review.userId)}>Edit Review</button> <button className='btn btn-primary' onClick={() => deleteReview(review.userId)}>Delete Review</button></>
                </div> : 
                
                
                <div key={1}>
                    
                    
                 <h1>{`${review.title} is clicked`}</h1>
                 <label id="upd-rev-title"><h4>Review Title:</h4></label>
                 <input type="text" value={newTitle} placeholder="New Title..." onChange={(e) => setNewTitle(e.target.value)}/>
                 <br />
                 <br />
                 <label id="upd-rev-text"><h4>Review Text:</h4></label>
                 <textarea value={newText}  cols="30" rows="10" placeholder='New Text...' onChange={(e) => setNewText(e.target.value)}></textarea>
                 <br />
                 <br />
                 <button className='btn btn-primary' onClick={() => onSubmit(review.userId)}>Submit New Info</button>
                 
                 </div>
        )}
    </div>
  )
}

export default ReviewsList;
