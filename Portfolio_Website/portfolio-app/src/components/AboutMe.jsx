import React, { useRef } from 'react'
import Header from './Header'
import removebg from '../assets/images/Boy giving thumbs up.png'
import { motion,useMotionValueEvent,useScroll, useTransform  } from 'framer-motion'
const AboutMe = () => {
    const kale = {
      hide: {
        opacity: 0,
        y:30
  
      },
      view:{
        opacity: 1,
        y:0,
        transition: {
          delay: 0.3,
            duration: 2
           
                // Use a number, not a string
        }
      },
    
    
    };
    const aboutMeRef = useRef(null);


    const scrollToSection = (refName) => {
      if (refName === 'aboutMeRef' && aboutMeRef.current) {
        aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };



  return (
    <>
    <motion.div id="aboutme" ref={aboutMeRef} // Assign reference
  variants={kale} initial="hide" whileInView="view" viewport={{ once: true }} // Ensures animation runs only once
 className="w-full lg:pt-16 sm:pt-16 md:pt-16 lg:pb-0 md:pb-0 sm:pb-0 sm:pl-10 sm:pr-10 pt-6 pb-0 px-14">



        <div className="head flex flex-col items-center align-middle lg:space-y-3 sm:space-y-3">
        <h6 className=' text-orange-500 lg:text-md font-semibold sm:text-sm text-[14px]'>Get To Know more</h6>
        <h1 className='font-extrabold text-black headline lg:text-6xl sm:text-4xl text-3xl'>About Me</h1> 
        </div>
        <div className="content lg:flex flex flex-col lg:flex-row lg:flex-2 lg:mt-10 md:mt-8 sm:mt-10 sm:flex sm:flex-row lg:min-w-screen ">
            <div className="first lg:w-2/5 sm:w-2/5 w-full ">
                <img src={removebg} alt="rmeovebg" />
            </div>
            <div className="second  lg:w-2/5 lg:mb-10  w-full sm:w-3/5 sm:mt-10">
                <div className="cont flex  lg:justify-between sm:justify-between justify-items-start flex-col sm:space-x-5 lg:space-x-5 md:space-x-5 sm:flex-row md:flex-row lg:flex-row space-y-4 sm:space-y-0 md:space-y-0 lg:space-y-0">
                    <div className=" fir  w-auto rounded-3xl flex flex-col  ">
                        <h1 className='font-bold text-xl font-custom mb-1 text-orange-500'>Experience</h1>
                        <p>2+ years</p>
                        <p>Web Developer</p>
                    </div>
                    <div className="tir  w-auto  rounded-3xl flex flex-col ">
                    <h1 className='font-bold text-xl font-custom mb-1 text-orange-500'>Education</h1>
                        <p>BS Software Engineering</p>
                        <p>Numl Islamabad</p>
                        <p>Graduation Feb 2026</p>
                    </div>
                </div>
                <div className="com my-6">
                    <p className=' font-normal text-gray-800 text-md font-custom'>Hi, I'm Muhammad Asim, a Web Developer and 3D Artist.
I specialize in creating dynamic, user-centric web applications using the MERN stack and bringing ideas to life through detailed 3D modeling with Blender. As a student at the National University of Modern Languages (NUML), I’ve honed my skills in full-stack development, mastering technologies like HTML5, CSS3, JavaScript, and Node.js.</p>

<p className='font-normal text-gray-800 text-md font-custom'>With hands-on experience from internships at Appium Logics Solutions and Ariesian Tech, I've developed scalable web solutions and worked on front-end and back-end technologies. From sleek, responsive websites to intricate 3D models, I thrive on crafting digital experiences that are both functional and visually striking.</p>

                </div>

            </div>

        </div>
       
      
    </motion.div>
    


    
    
    </>
        
      
  )
}

export default AboutMe
