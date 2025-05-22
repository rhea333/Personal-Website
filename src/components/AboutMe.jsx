import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { roboPhone } from '../utils';
import { DJBoardImg } from '../utils';
import { TKDFightvid } from '../utils';


gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const textRef = useRef(null);
  const headingRef = useRef(null); // Create a reference for the header

  useEffect(() => {
    const elements = textRef.current.querySelectorAll('.about-text');

    // Animation for the text elements
    gsap.from(elements, {
      x: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#about-me',
        start: 'top 80%', // Start when the top of the section is at 80% of the viewport
        toggleActions: 'play none none reset',
      },
    });

    // Animation for the header element
    gsap.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#about-me',
        start: 'top 60%', // Start when the top of the section is at 80% of the viewport
        toggleActions: 'play none none reset',
      },
    });
  }, []);

  return (
    <section id="about-me" className="w-screen h-full common-padding bg-black relative">
      <div className="screen-max-width">
      <div ref={headingRef} className="text-center text-4xl text-gray-400 font-semibold">About Me</div>
      
        
        {/* About Me Content and Video Row */}
        <div className="flex flex-col lg:flex-row">
          
          {/* Video on the left */}
          <div className="video-container w-full lg:w-1/2 flex justify-center items-center lg:mr-10 mb-10 lg:mb-0">
            <div className="justify-center items-center">
              <video className="pointer-events-none" autoPlay loop muted key={roboPhone}>
                <source src={roboPhone} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* About Me text on the right */}
          <div className="about-text-container w-full lg:w-1/2" ref={textRef}>
            <p className="mt-4 text-right about-text text-white">
              I like to pick up random hobbies here and there, and currently my main interest is DJing! I like to mix anything from trance to recession club music (not super into dnb)
            </p>
            

            {/* Side-by-side media section */}
            <div className="mt-6 flex justify-center items-start gap-4 about-text">
              {/* Image */}
              <img
                src={DJBoardImg}
                alt="DJing hobby"
                className="w-64 h-40 object-cover rounded-lg shadow-lg"
              />
              </div>
              
              <p className="mt-4 text-left about-text text-white">
              I'm also a martial artist! Take a look at one of my more recent tournaments. I'm the one in blue {'>:)'}
              </p>

              <div className="mt-6 flex justify-center items-start gap-4 about-text">
              {/* Video */}
              <video
                className="w-64 h-40 object-cover rounded-lg shadow-lg pointer-events-none"
                autoPlay
                loop
                muted
                key={TKDFightvid}
              >
                <source src={TKDFightvid} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
