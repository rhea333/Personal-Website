import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { roboWork } from '../utils';

gsap.registerPlugin(ScrollTrigger);

const WorkExp = () => {
  const timelineRef = useRef(null);
  const headingRef = useRef(null);

  const jobs = [
    { icon: '🏢', title: 'Software Engineer at TechCorp', description: 'Worked on building scalable web applications using React and Node.js.' },
    { icon: '💼', title: 'Backend Developer at CodeWorks', description: 'Developed robust APIs and microservices for enterprise solutions.' },
    { icon: '👨‍💻', title: 'AI Researcher at InnovateAI', description: 'Conducted research on machine learning models and their optimization.' },
  ];

  useEffect(() => {
    const elements = timelineRef.current.querySelectorAll('.job-card');

    gsap.from(elements, {
      x: -50,
      opacity: 0,
      stagger: 0.5,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#work-exp',
        start: 'top 80%',
        toggleActions: 'play none none reset',
      },
    });

    gsap.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#work-exp',
        start: 'top 60%',
        toggleActions: 'play none none reset',
      },
    });
  }, []);

  return (
    <section id="work-exp" className="w-screen h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div ref={headingRef} className="text-center text-4xl text-gray-400 font-semibold mb-8">Work Experience</div>

        {/* Timeline and Video Row */}
        <div className="flex flex-col lg:flex-row">
          
          {/* Timeline on the left */}
          <div className="timeline-container flex flex-col space-y-10 w-full lg:w-1/2" ref={timelineRef}>
            {jobs.map((job, index) => (
              <div key={index} className="job-card p-5 bg-white rounded-lg shadow-md flex flex-col items-center">
                <div className="icon text-4xl mb-4">{job.icon}</div>
                <h2 className="text-xl font-bold mb-2">{job.title}</h2>
                <p className="text-gray-600 text-center">{job.description}</p>
              </div>
            ))}
          </div>

          {/* Video on the right with similar styling to the timeline */}
          <div className="video-container w-full lg:w-1/2 flex justify-center items-center lg:ml-10 mt-10 lg:mt-0">
            <div className="video-card p-5 bg-white rounded-lg shadow-md flex justify-center items-center">
              <video className="pointer-events-none" autoPlay loop muted key={roboWork}>
                <source src={roboWork} type="video/mp4" />
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkExp;
