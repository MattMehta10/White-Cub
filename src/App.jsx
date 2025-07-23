import React from 'react'
import ReactLenis from 'lenis/react'
import Home from './Routes/Home'

const App = () => {
  return (
  <><ReactLenis root options={{ smooth:true , autoRaf:false , duration: 1.2 }}>
    <Home/>
  </ReactLenis>
  </>
    )
}

export default App