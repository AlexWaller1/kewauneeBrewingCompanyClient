import React from 'react'
import  ReviewsPageHeader  from './ReviewsPageHeader'
import { useState, useEffect } from 'react'
import ReviewsForm from './ReviewsForm'

 const ReviewsPage = () => {

  const [reviews, setReviews] = useState([]);
  return (
    <div className='reviews-page-div'>
        <ReviewsPageHeader text="We Want To Hear About Your Experience!"/>
        <ReviewsForm reviews={reviews} setReviews={setReviews}/>
    </div>
  )
}

export default ReviewsPage
