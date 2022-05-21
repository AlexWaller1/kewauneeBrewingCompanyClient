import React from 'react'
import { useState } from "react";

const ReviewsForm = () => {

   const [revForm, setRevForm] = useState({
     title: "",
     text: ""
   })

  return (
    <div id="review form">
      <div className="form-control">
        <label>Post Title</label>
        <input type="text" placeholder='Post Title...'/>
      </div>
      <div className="form-control">
        <label>Leave Review Here</label>
        <input type="textbox" placeholder="Type Review Here..."/>
      </div>
      <div className="form-control">
        <input type="submit" className='btn btn-primary' value="submit review"/>
      </div>
    </div>
  )
}

export default ReviewsForm;
