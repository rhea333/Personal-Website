import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {LocalLoveImg} from '../utils'
import {FinanceLLMImg} from '../utils'
import {DigitClassImg} from '../utils'
import {OceanLinkImg} from '../utils'
import {WhisperImg} from '../utils'
import {ColourInvImg} from '../utils'
import {ScotiaChainImg} from '../utils'



gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    title: "Local Love",
    details: "A web app helping users find small shop alternatives to big box stores to promote local businesses.",
    image: LocalLoveImg,
  },
  {
    title: "Finance LLM",
    details: "Fine-tuned LLM for up-to-date investing advice. From all your trustworthy sources like Yahoo Finance and Reddit :D",
    image: FinanceLLMImg,
  },
  {
    title: "Handwritten Digit Classifier",
    details: "Developed a CNN to identify written numbers, working up to full equations.",
    image: DigitClassImg,
  },
  {
    title: "OceanLink",
    details: "A Hackathon winning project gathering real time ocean tide data to inform captains of surrounding weather conditions and obstacles.",
    image: OceanLinkImg,
  },
  {
    title: "Whisper",
    details: "Secure Chat app hosting encrypted messaging with a functoinality to create announcement channels.",
    image: WhisperImg,
  },
  {
    title: "Colour Inversion",
    details: "An OpenCV colour inverter with CUDA to keep my instagram 'artsy' >:)",
    image: ColourInvImg,
  },
  {
    title: "ScotiaChain",
    details: "A Hackathon finalist that detects potential fraudulent purchases based on accumulated scam agency data and user reporting, with user credentials stored as a blockchain Decentralized Identifier. ",
    image: ScotiaChainImg,
  },
  // Add more projects as needed
];

const Projects = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#projects',
        start: 'top 80%',
        toggleActions: 'play none none reset',
      },
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <h1 ref={headingRef} className="text-center text-4xl text-gray-400 font-semibold mb-8">Projects</h1>
        

        <p className="text-center text-blue-500 underline text-sm mb-6">
          <a href="https://github.com/rhea333" target="_blank" rel="noopener noreferrer">
          github.com/rhea333
          </a>
        </p>

        <Slider {...settings}>
          {projectData.map((project, index) => (
            <div className="project-slide px-5 flex flex-col items-center justify-center text-center h-72" key={index}>
            <div className="w-full flex justify-center mb-4">
            <img 
                src={project.image} 
                alt={project.title} 
                className="h-32 max-w-[70%] object-contain"
              />
              </div>
              <h3>{project.title}</h3>
              <p>{project.details}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
