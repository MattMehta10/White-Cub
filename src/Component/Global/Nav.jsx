import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";

const Nav = () => {
  return (<>
  
  <div className='fixed z-50 py-3 px-9 font-[gilroy] flex items-center justify-between w-full'>
  <div className='w-[20%]'><img src="/whitecub.png" className='rounded-full h-17' alt="" /></div>
    <div className='flex gap-12 pr-8 w-3/4 font-extrabold text-2xl text-white '>
      <h1>Products</h1>
      <h1>Blogs</h1>
      <h1>About Us</h1>
      <h1>Contact</h1>
    </div>
    <div className='flex gap-8 text-white items-center w-[30%]'>
      <div className='flex items-center relative'>
      <input className='border-1 shadow-2xl rounded-xl text-lg text-black font-bold h-8 w-58 bg-amber-50/55 p-2' type="text" placeholder='search products...' /> <CiSearch className='absolute right-2'/>
      </div>
      <div className='flex relative gap-5'>
      <IoPersonCircleSharp className='text-2xl'/>
      <CiHeart className='text-2xl'/>
      <GiShoppingCart className='text-2xl'/>
      </div>
    </div>
    </div></>
  )
}

export default Nav