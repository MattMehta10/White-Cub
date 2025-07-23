const ReviewCard = ({ review, author }) => (
  <div className='flex flex-col p-5 rounded-xl shadow-md bg-white max-w-[350px] min-h-[200px] hover:scale-105 duration-300'>
    <p className='text-gray-800 text-sm mb-4 line-clamp-5'>"{review}"</p>
    <div className='mt-auto text-right text-blue-700 font-semibold text-base'>
      — {author}
    </div>
  </div>
);
export default ReviewCard;
