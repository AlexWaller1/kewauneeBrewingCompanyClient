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
       text: revText
     };
     console.log(newReview);
     if (newReview.title != "" || newReview.text != "") {
       console.log("review must have title and text");
     } else {
      setReviews([...reviews, newReview]);
     }
   }
   
   

  return (
    <form id="review-form" onSubmit={onSubmit}>
        
        <label className="rev-form-label"><h4>Post Title:</h4></label>
        <input type="text"  placeholder='Post Title...'/>
        
      <br />
      <br />
      
        <label className="rev-form-label"><h4>Leave Review Here:</h4></label>
        <input type="textbox" placeholder="Type Review Here..."/>
      
      <br />
      <br />
      
        <input type="submit" className='btn btn-primary' value="submit review"/>
      
    </form>
  )
}

export default ReviewsForm;
