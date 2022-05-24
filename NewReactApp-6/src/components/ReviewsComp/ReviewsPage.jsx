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
  }, []);

  const deleteReview = async (id) => {
     await fetch (`http://localhost:3006/api/comments/${id}`,
     {
       method: "DELETE"
     })

     setReviews(reviews.filter(review => review.userId !== id));
  }

  const addReview = async (review) => {
     await fetch("http://localhost:3006/api/comments", {
      method: "POST",
      headers: {
        // 'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review),
    }).then(res => res.json()).
    then(data => setReviews(data))

   
  }

  const editReview = async (review) => {
    await fetch("http://localhost:3006/api/comments", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    }).then(res => res.json()).
    then(data => setReviews([...data]));
  }

  const isClicked = (id) => {
    let clone = [...reviews]
    let i = 0;
    for (; i < clone.length; i++) {
      if (clone[i].userId == id) {
        clone[i].clicked = !clone[i].clicked;
      }
    }
    setReviews([...clone]);
  }

  return (
    <div className='reviews-page-div'>
        <ReviewsPageHeader text="We Want To Hear About Your Experience!"/>
        <ReviewsForm reviews={reviews} setReviews={setReviews} addReview={addReview}/>
        <ReviewsList reviews={reviews} deleteReview={deleteReview} editReview={editReview} isClicked={isClicked}/>
        
    </div>
  )
}

export default ReviewsPage
