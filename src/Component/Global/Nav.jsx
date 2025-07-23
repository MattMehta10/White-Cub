import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const loc = useLocation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [ShowNavbar, setShowNavbar] = useState(true);
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // scrolling down
      setShowNavbar(false);
    } else {
      // scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  return (<>
  <div className={`${(loc.pathname == '/')?  `bg-transparent text-white` : `text-black border-b border-gray-300 bg-[#fff5e3]`}  ${(ShowNavbar)?'translate-y-0':'-translate-y-full'} fixed transition-transform duration-300 z-50 py-3 px-9 font-[gilroy] flex items-center justify-between w-full`}>
  <div className='w-[10%]'><img src="/whitecub.png" className='rounded-full h-17' alt="" /></div>
    <div className='flex gap-12  w-3/4 font-extrabold text-2xl '>
      <NavLink to='/'>
        <h1>Home</h1>
      </NavLink>
      <NavLink to='/Products'>
        <h1>Products</h1>
      </NavLink>
      <NavLink to='/Blogs'>
      <h1>Blogs</h1>
      </NavLink>
      <NavLink to='/About'>
      <h1>About Us</h1>
      </NavLink>
      <NavLink to='/Contact'>
      <h1>Contact</h1>
      </NavLink>
      
    </div>
    <div className='flex gap-8 items-center w-[30%]'>
      <div className='flex items-center relative'>
      <input className='border-1 shadow-2xl rounded-xl text-lg font-semibold h-8 w-58 backdrop-blur-sm bg-amber-50/45 p-2' type="text" placeholder='search products...' /> <CiSearch className='absolute text-xl right-2'/>
      </div>
      <div className='flex relative gap-5'>
      <IoPersonCircleSharp className='text-3xl'/>
      <CiHeart className='text-3xl'/>
      <GiShoppingCart className='text-3xl'/>
      </div>
    </div>
    </div></>
  )
}

export default Nav