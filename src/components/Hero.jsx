import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {heroVideo, smallHeroVideo} from '../utils'
import {roboWave} from '../utils'

const Hero = () => {
const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? roboWave : roboWave)

const handleVideoSrcSet = () => {
  if (window.innerWidth < 760) {
    setVideoSrc(roboWave)
  } else{
    setVideoSrc(roboWave)
  }
  }


//for big screen use big video for small screen use small video
useEffect (() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }

  }, [])


  useGSAP(() =>  {
    gsap.to('#hero',{opacity: 1, delay: 1.5 })

    gsap.to('#cta', {opacity: 1, y: -50, delay: 1.5} )
  }, [])
  //first argument is animations, 2nd argument is dependencies when it is running


  
  
  
  return (
    <section className="w-full nav-height bg-black relative mb-20">
      <div className="h-5/6 w-full flex-center flex-col">
      <p id="hero" className="hero-title text-6xl">Hi I'm Rhea</p> 

      <div className="h-5/6 md:w-10/12 w-9/12">
        <video className="pointer-events-none" autoPlay muted loop key={videoSrc}>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      </div>
      
      
      
      {/* cta means call to action  */}
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        {/*<a href="#highlights" className="btn"></a> */}
        <p className="font-normal text-xl">Software Engineering IV at McMaster University</p>
        <p className="font-normal text-xs text-gray-400">Scroll over a section again if it doesn't load right the first time!</p>
      </div>

    </section>
  )
}

export default Hero