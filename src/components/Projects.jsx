import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    title: "Project 1",
    details: "Details about Project 1",
    image: "/path/to/image1.jpg",
  },
  {
    title: "Project 2",
    details: "Details about Project 2",
    image: "/path/to/image2.jpg",
  },
  {
    title: "Project 3",
    details: "Details about Project 3",
    image: "/path/to/image3.jpg",
  },
  {
    title: "Project 4",
    details: "Details about Project 4",
    image: "/path/to/image4.jpg",
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

        <Slider {...settings}>
          {projectData.map((project, index) => (
            <div className="project-slide flex flex-col items-center" key={index}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-32 h-32 object-cover mb-4" 
              />
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
