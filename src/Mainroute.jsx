import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Landing/Hero'
import Products from './Routes/Products'
import Blog from './Routes/Blog'
import About from './Routes/About'
import Contact from './Routes/Contact'
import FAQs from './Routes/FAQs'
import PP from './Routes/PP'
import ShipPolicy from './Routes/ShipPolicy'
import TC from './Routes/TC'
import App from './App'
import ProductDetail from './Component/Product/ProductDetail'
const Mainroute = () => {
  return (
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/Products' element={<Products/>} />
    <Route path='/Products/:slug' element={<ProductDetail/>} />
    <Route path='/Blogs' element={<Blog/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/FAQs' element={<FAQs/>} />
    <Route path='/PrivacyPolicy' element={<PP/>} />
    <Route path='/ShippingPolicy' element={<ShipPolicy/>} />
    <Route path='/T&C' element={<TC/>} />
  </Routes>
  )
}

export default Mainroute