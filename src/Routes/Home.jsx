import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three';
import { motion } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import Lenis from 'lenis';

function IceCreamModel() {
  const { position, rotation } = useSpring({
    from: {
      position: [9, -1, 1], // far right in X
      rotation: [0, -3, 0], // slight starting tilt
    },
    to: {
      position: [1.4, -1, 0.5], // center
      rotation: [0.4, 4.25, 0], // straight by end
    },
    config: { mass: 2, tension: 120, friction: 38 }, // smooth & slow
  });

  const { scene } = useGLTF('/ice cream.glb');

  return (
    <a.primitive 
      object={scene} 
      scale={2} 
      position={position} 
      rotation={rotation} 
    />
  );
}

const Home = () => {

  const containerVariants = {
    hidden:{opacity:0 , y:20},
    show:{opacity:1 ,y:0,
      transition: {
      staggerChildren: 0.4, // 0.3 seconds between each child animation
      delayChildren: 3, // wait 0.5s before starting children animations
    },}
  }
  
  const childvariants= {hidden:{opacity:0 , y:20},
    show:{opacity:1 ,y:0,
      transition: { duration:0.5 // wait 0.5s before starting children animations
    },}}

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // cleanup on unmount
    };
  }, []);
  return (
    <div className='bg-gradient-to-r  from-[#fab6d9] relative via-[#ff9cb5] to-[#f33a68] overflow-hidden w-full h-screen'>
      <span className='bg-black top-1 right-8 z-15 absolute blur-lg opacity-90 h-20 w-30'></span>
      <span className='bg-black -bottom-1 left-5 z-2 absolute blur-lg h-15 w-35'></span>
      <img src="branch.png" className='absolute opacity-85 right-15 rotate-x-180 -rotate-12 -top-15 h-50 z-5' alt="" />
      <img src="lush.png" className='absolute opacity-85  -right-22 -top-10 h-50 rotate-180 z-10' alt="" />
      <img src="lush.png" className='absolute opacity-85  object-cover -left-12 -bottom-7 h-35' alt="" />
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <pointLight position={[.1, 0, 3]} intensity={40} />
        <IceCreamModel />      
        <Environment preset="sunset" />
      </Canvas>
      
      <motion.div
      initial={{x:-50 ,opacity:0}} animate={{x:20,opacity:100}} transition={{duration:1, delay:1}}
      className='absolute top-40 flex flex-col w-130 items-center left-30'>
        <h1 className='font-extrabold font-[gilroy] text-[#a43890] text-8xl'>White Cub</h1>
        <div className='flex items-center gap-5'>
          <hr className='w-20 border text-white' /><p className='text-bold text-[#a43890]'>Consciously Vegan</p><hr className='w-20 border text-white' />
          </div>
          <p className='font-medium text-center text-[#511d47] text-xl mt-6 '>India’s pioneering brand for dairy-free, cholesterol-free <br /> indulgence—crafted for every compassionate choice.</p>
      </motion.div>
      <div className='absolute flex gap-5 text-xl shadow-2xl text-white items-center left-7 bottom-3 h-8 w-30 z-5'>
        <FaFacebook/>
        <FaInstagram/>
        <ImWhatsapp/>
      </div>
    <motion.div variants={containerVariants}
      initial="hidden"
      animate="show" className='h-fit w-fit absolute bottom-45 left-45 gap-3 flex' >{[1, 2, 3, 4, 5].map((item) => (
      <motion.img src={`/p-${item}.jpg`} key={item} variants={childvariants} className='h-20 rounded-full'/>
      ))}
</motion.div>

  </div>
  )
}

export default Home
