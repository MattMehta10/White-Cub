// src/Component/Blog/SubComponents/BlogCard.jsx
import React from 'react';

const BlogCard = ({ title, date, summary, link }) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer' className='flex flex-col justify-between p-4 rounded-xl shadow-md hover:scale-105 duration-300 bg-white w-full max-w-[300px] min-h-[250px]'>
      <h3 className='font-bold text-lg mb-2'>{title}</h3>
      <p className='text-xs text-gray-500 mb-4'>{date}</p>
      <p className='text-sm text-gray-700 mb-4 line-clamp-3'>{summary || "Read more on our blog!"}</p>
      <span className='text-blue-500 font-semibold mt-auto'>Read More →</span>
    </a>
  );
};

export default BlogCard;
