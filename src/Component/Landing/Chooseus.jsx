import { useGSAP } from '@gsap/react'
import { useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from 'lenis/react'
import React, { use, useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const Chooseus = () => {
  const plateref = useRef();
  const lenis = useLenis();
  useEffect(()=>{
      function update(time){
        if(lenis){
        lenis.raf(time*1000) //GSAP gives seconds but Lenis wants ms 
      }
    }
      gsap.ticker.add(update)
      return ()=>gsap.ticker.remove(update)
    },[lenis])

  useGSAP(()=>{
    gsap.from(plateref.current,{
      x:-150,
      duration:1,
      delay:.5,
      scrollTrigger:{
        trigger:"#chooseus",
        start: "top 50%",
        end: "top top",
        markers:true,
        scrub:true,
        once:true
      }         
    })
  })
  return (<>
  {/* initial={{ rotateZ:-20, x: -1050 }} animate={{rotateZ:0, x: -150 }} transition={{ duration: 1, delay: 2, ease: "easeIn" }} */}
    <div id='chooseus' style={{background:`url(/table.jpg)`,backgroundSize: 'cover',backgroundPosition: 'center',}} className='flex items-center h-screen w-full overflow-hidden'>
      <div className='relative h-screen -translate-x-25 w-[70vw]'>
    <img className='h-200 absolute' src="/plate.png" alt="" />
    <img className='absolute top-0 left-50 z-55 h-155' src="/Berrylicious.png" alt="" />
    <span className='absolute top-0 left-50 blur-3xl bg-black h-60 w-10 z-50'></span>
    <img className='absolute bottom-30 left-40 z-50 h-55' src="/butter.png" alt="" />
    <span className='absolute top-40 right-60 bg-black h-90 blur-2xl w-10 z-50'></span>
    <img className='absolute bottom-25 right-50 h-120 z-50' src="/MasalaButtermylk.png" alt="" />
    <span className='absolute bottom-0 h-70 left-140 z-50 bg-black blur-2xl w-10'></span>
      </div>
    <div className='relative w-[30vw] h-screen'>
      <h1 className='absolute top-20 right-50 font-extrabold text-3xl text-black'>Why Choose Us</h1>
      <div className='absolute flex top-45 flex-col gap-4'>
      <img className='rounded-full h-20' src="/p-1.jpg" alt="" />
      <img className='rounded-full h-20' src="/p-2.jpg" alt="" />
      <img className='rounded-full h-20' src="/p-3.jpg" alt="" />
      <img className='rounded-full h-20' src="/p-4.jpg" alt="" />
      <img className='rounded-full h-20' src="/p-5.jpg" alt="" />
      </div>
    </div>
    </div>
  </>
  )
}

export default Chooseus