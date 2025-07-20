import { motion } from 'framer-motion'
import React from 'react'
import Home from './Routes/Home'
import Nav from './Component/Global/Nav'
import Hero from './Component/Landing/Hero'
import ReactLenis from 'lenis/react'

const App = () => {
  return (
  <><ReactLenis root options={{ smooth:true , autoRaf:false , duration: 1.2 }}>
    <Nav/><Home /><Hero/>
  </ReactLenis>
  </>
    )
}

export default App