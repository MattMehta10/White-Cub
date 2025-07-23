// src/Component/Landing/SubComponents/PrevBlog.jsx
import React from 'react';
import BlogCard from '../../Component/Blog/BlogCards';
import blogs from '../../../Data/blog.json'; // Assuming your blog data is saved here

const PrevBlog = () => {
  const previewBlogs = blogs.slice(0, 6); // Show first 4 blogs

  return (
    <div id='prevblog' className='flex justify-between gap-6 items-center px-10 py-16 bg-[#f8f8f8]'>
      <div className='flex flex-wrap gap-6 max-w-5xl'>
        {previewBlogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>

      {/* Empty space on right */}
      <div className='flex-1 hidden md:block'></div>
    </div>
  );
};

export default PrevBlog;
