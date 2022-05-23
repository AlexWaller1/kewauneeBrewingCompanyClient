import React from 'react'
import { useState } from "react";


const ReviewsForm = ({ reviews, setReviews, addReview }) => {

   const [revTitle, setTitle] = useState("");

   const [revText, setText] = useState("");

   const [clicked, setClicked] = useState(false);

   

   let onSubmit = (e) => {
     e.preventDefault();
     console.log("review form submitted");
     let newReview = {
       title: revTitle,
       text: revText,
       clicked: false
     };

     console.log(reviews);

     console.log(newReview);
     if (newReview.title == "" || newReview.text == "") {
       console.log("review must have title and text");
     } else {
      
      addReview(newReview);
       setTitle("");
       setText("");
      
      // const res = await fetch("http://localhost:3006/comments", {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json"
      //   },
      //   body: JSON.stringify(newReview)
      // });
      // const data = await res.json();

      // setReviews([...reviews, data]);
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
