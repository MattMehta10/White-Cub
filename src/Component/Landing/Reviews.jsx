import React from 'react'
import reviews from '../../../Data/Review.json'
import ReviewCard from '../Review/ReviewCard'
const Reviews = () => {
  return (
    <div className='bg-emerald-500 w-full h-screen'> <div className='flex flex-wrap justify-center gap-6 p-5'>
    {reviews.map((r, i) => (
      <ReviewCard key={i} review={r.review} author={r.author} />
    ))}
  </div>
    </div>
  )
}

export default Reviews