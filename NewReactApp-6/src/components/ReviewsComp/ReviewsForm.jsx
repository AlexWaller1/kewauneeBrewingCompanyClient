import React from 'react'
import { useState } from "react";


const ReviewsForm = ({ reviews, setReviews }) => {

   const [revTitle, setTitle] = useState("");

   const [revText, setText] = useState("");

   

   let onSubmit = (e) => {
     e.preventDefault();
     console.log("review form submitted");
     let newReview = {
       title: revTitle,
       text: revText,
       clicked: false
     };
     console.log(newReview);
     if (newReview.title == "" || newReview.text == "") {
       console.log("review must have title and text");
     } else {
      setReviews([...reviews, newReview]);
      setTitle("");
      setText("");
     }
   }
   
   

  return (
    <form id="review-form" onSubmit={onSubmit}>
        
        <label className="rev-form-label"><h4>Post Title:</h4></label>
        <input type="text" value={revTitle} placeholder='Post Title...' onChange={e => setTitle(e.target.value)}/>
        
      <br />
      <br />
      
        <label className="rev-form-label"><h4>Leave Review Here:</h4></label>
        <textarea id="review-text-area" cols="55" rows="5" value={revText} placeholder="Post Review..." onChange={e => setText(e.target.value)}></textarea>
      
      <br />
      <br />
      
        <input type="submit" className='btn btn-primary' value="submit review"/>
      
    </form>
  )
}

export default ReviewsForm;
