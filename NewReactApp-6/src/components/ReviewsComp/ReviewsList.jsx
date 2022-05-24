import React from 'react'

const ReviewsList = ({ reviews, deleteReview, editReview }) => {
  return (
    <div className="rev-list-div-1">
        { reviews[0] == undefined ? <h1>No Reviews Posted</h1> : reviews.map(review =>
                review.clicked == false ?
                <div key={Math.random() * 100000} className="rev-list-div-2">
                <h1>{review.title}</h1>
                <h4>{review.text}</h4>
                <><button className='btn btn-primary'>Edit Review</button> <button className='btn btn-primary' onClick={() => deleteReview(review.userId)}>Delete Review</button></>
                </div> : 
                <div key={Math.random() * 100000}>
                 <h1>{`${review.title} is clicked`}</h1>
                 </div>
        )}
    </div>
  )
}

export default ReviewsList;
