// pages/Blog.jsx
import React from 'react';
import BlogCard from '../Component/Blog/BlogCards';
import blogs from '../../Data/blog.json'; // Your cleaned blog data

const Blog = () => {
  return (
  <div className='w-full h-full bg-gray-700'>
    <div className="max-w-7xl mx-auto p-4 pt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard
          key={index}
          title={blog.title}
          date={blog.date}
          summary={blog.summary}
          link={blog.link}
          />
        ))}
      </div>
    </div>
</div>
  );
};

export default Blog;
