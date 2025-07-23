import React from 'react'
import Chooseus from '../Component/Landing/Chooseus'
import PrevItems from '../Component/Landing/PrevItems'
import PrevBlog from '../Component/Landing/PrevBlog'
import Reviews from '../Component/Landing/Reviews'
import Hero from '../Component/Landing/Hero'
import { IoIosArrowRoundUp } from "react-icons/io";
import Category from '../Component/Landing/Category'

const Home = () => {
  return (<div className='relative'><IoIosArrowRoundUp className='absolute' />
    <Hero/>
    <Category/>
    <PrevItems/><PrevBlog/><Reviews/>
  </div>
  )
}

export default Home