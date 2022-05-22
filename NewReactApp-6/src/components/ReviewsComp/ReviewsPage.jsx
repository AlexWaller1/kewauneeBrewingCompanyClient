import React from 'react'
import  ReviewsPageHeader  from './ReviewsPageHeader'
import { useState, useEffect } from 'react'
import ReviewsForm from './ReviewsForm'
import ReviewsList from './ReviewsList'

 const ReviewsPage = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3006/api/comments").then(
      res => res.json().then(
        data => setReviews([...data])
      )
    )
  })
  return (
    <div className='reviews-page-div'>
        <ReviewsPageHeader text="We Want To Hear About Your Experience!"/>
        <ReviewsForm reviews={reviews} setReviews={setReviews}/>
        <ReviewsList reviews={reviews}/>
        
    </div>
  )
}

export default ReviewsPage
