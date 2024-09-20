import React, { useEffect } from 'react'
import ecommerceSite from '../assets/videos/video_website.mp4'
import ariesian_task2 from '../assets/videos/ariesian task-2.mp4'
import imageGallery from '../assets/videos/ariesian task-1.mp4'
import todovideo from '../assets/videos/todovideo.mp4'
import first_taskVideo from '../assets/videos/first_taskvideo.mp4'
import image from '../assets/images/image.png'
import todopic from '../assets/images/todopic.jpg'
import firsttasktravel from '../assets/images/firsttasktravel.jpg'
import imageGalleryPic from '../assets/images/imageGalleryPic.jpg'
import ecommercePic from '../assets/images/ecommercePic.jpg'
import { useRef } from 'react';
import {motion} from "framer-motion"

const Projects = () => {


  const kk=useRef();

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
          duration: 2,
              // Use a number, not a string
      },
    },
 

  };
  const projectsRef = useRef(null);
  const scrollToSection = (refName) => {

  if (refName === 'projectsRef' && projectsRef.current) {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}

const ecommerceWeb=()=>{
  window.location.href="https://github.com/Muhammadasim225/Ecommerce-App";
}
const imageGalleryApp=()=>{
  window.location.href="https://github.com/Muhammadasim225/Ariesian-Tech/tree/main/Task-1/Image%20Gallery";
}
const calculator=()=>{
  window.location.href="https://github.com/Muhammadasim225/Ariesian-Tech/tree/main";
}
const greenCoffeeProject=()=>{
}
const explorePak=()=>{
  window.location.href="https://github.com/Muhammadasim225/Tasks-1";
}
const todoApp=()=>{
  window.location.href="https://github.com/Muhammadasim225/TodoList_react";
}


  // useEffect(()=>{
  //   const re=kk.current.


  // },[])
  return (
    <>
        <motion.div id="projects" ref={projectsRef}  variants={kale} initial="hide" whileInView="view" viewport={{ once: true }} className="w-full lg:px-16 sm:px-16 md:px-0 md:pt-6 md:pb-0 px-10 pt-6 lg:pt-16 sm:pt-14 pb-14">
        <div className="head flex flex-col items-center align-middle lg:space-y-3 sm:space-y-3 md:space-y-3 space-y-1 mb-6 ">
        <h6 className=' text-orange-500 lg:text-lg text-sm sm:text-sm font-semibold'>My recent projects
</h6>
        <h1 className='font-extrabold text-black headline lg:text-6xl sm:text-4xl text-3xl '>Projects</h1> 
        </div>

        <div className="content flex flex-wrap gap-10 justify-center lg:my-20 sm:my-10 w-full">
        <div className="card bg-white border border-orange-500 text-black w-full sm:w-11/12 lg:w-[47%] md:w-5/12 rounded-xl ">
            <div className="video-container bg-black h-60 sm:mb-4 md:mb-4 lg:mb-4 mb-1 rounded-t-xl"  onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
    onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}>
              {/* Replace with <video> tag */}
              <video className="w-full h-full object-cover rounded-xl text-white" src={ecommerceSite} poster={ecommercePic} muted></video>
            </div>
            <div className="card-body sm:lg-6  md:lg-6 lg:pl-6 sm:pr-6 md:pr-6 lg:pr-6 sm:pb-2 md:pb-2 lg-pb-2 sm:pt-2 md:pt-2 lg:pt-2 pl-3 pr-3 pb-2 pt-2">
              <h2 className="sm:text-2xl md:text-2xl lg:text-2xl sm:mb-3 md:mb-3 lg:mb-3 mb-1 font-custom font-bold text-orange-500 text-xl ">Ecommerce Website</h2>
              <p className="sm:mb-4 md:mb-4 lg:mb-4 mb-2 font-custom text-black text-md lg:text-md sm:text-md md:text-md">
              A full-stack eCommerce platform built using the MERN stack. It includes a functional user authentication system, product browsing, shopping cart ,add to cart functionality, add to favorites and checkout.
              </p>
              <ul className="list-disc list-inside text-blue-400 text-md">
                <li>User authentication with secure login and registration</li>
                <li>Browse and view detailed product information</li>
                <li>Fully functional shopping cart and checkout process</li>
                <li>Smooth UI animations with Framer Motion</li>
              </ul>
              <div className="flex justify-end mt-6">
                <button onClick={ecommerceWeb} className="text-blue-400 flex items-center">
                  View <span className="ml-2">➔</span>
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-white border border-orange-500 text-black w-full sm:w-11/12 lg:w-[47%] md:w-5/12 rounded-xl ">
            <div className="video-container bg-black h-60 sm:mb-4 md:mb-4 lg:mb-4 mb-1 rounded-t-xl "   onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
    onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}>
              {/* Replace with <video> tag */}
              <video className="w-full h-full object-cover rounded-xl text-white" src={imageGallery} poster={imageGalleryPic} muted></video>
            </div>
            <div className="card-body  sm:lg-6  md:lg-6 lg:pl-6 sm:pr-6 md:pr-6 lg:pr-6 sm:pb-2 md:pb-2 lg-pb-2 sm:pt-2 md:pt-2 lg:pt-2 pl-3 pr-3 pb-2 pt-2">
              <h2 className="sm:text-2xl md:text-2xl lg:text-2xl sm:mb-3 md:mb-3 lg:mb-3 mb-1 font-custom font-bold text-orange-500 text-xl ">Image Gallery App
              </h2>
              <p className="sm:mb-4 md:mb-4 lg:mb-4 mb-2 font-custom text-black text-md lg:text-md sm:text-md md:text-md">
              An interactive image gallery app featuring smooth CSS animations and transitions. The design is fully responsive, ensuring optimal viewing across various screen sizes.
              </p>
              <ul className="list-disc list-inside text-blue-400 text-md">
                <li>CSS animations for seamless transitions between images
                </li>
                <li>Responsive design for both mobile and desktop devices
                </li>
                <li>Hover effects to enhance the user experience
                </li>
                <li>Grid layout for organized and visually appealing presentation
                </li>
                <li>Cross-browser compatibility
                </li>
              </ul>
              <div className="flex justify-end mt-6">
                <button onClick={imageGalleryApp} className="text-blue-400 flex items-center">
                  View <span className="ml-2" >➔</span>
                </button>
              </div>
            </div>
          </div>



          <div ref={kk} className=  "card bg-white border border-orange-500 text-black w-full sm:w-11/12 lg:w-[47%] md:w-5/12 rounded-xl grp ">
            <div className="video-container h-60 sm:mb-4 md:mb-4 lg:mb-4 mb-1 rounded-t-xl"   onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
    onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}>
              {/* Replace with <video> tag */}
              <video className="w-full h-full object-cover rounded-xl text-white" src={ariesian_task2} poster={image} muted></video>
            </div>
            <div className="card-body  sm:lg-6  md:lg-6 lg:pl-6 sm:pr-6 md:pr-6 lg:pr-6 sm:pb-2 md:pb-2 lg-pb-2 sm:pt-2 md:pt-2 lg:pt-2 pl-3 pr-3 pb-2 pt-2">
              <h2 className="sm:text-2xl md:text-2xl lg:text-2xl sm:mb-3 md:mb-3 lg:mb-3 mb-1 font-custom font-bold text-orange-500 text-xl ">Calculator App</h2>
              <p className="sm:mb-4 md:mb-4 lg:mb-4 mb-2 font-custom text-black text-md lg:text-md sm:text-md md:text-md">
              A fully responsive calculator app built with ReactJS, featuring smooth transitions, animations, and interactive sound effects. The app offers a sleek and engaging user experience across all devices.
              </p>
              <ul className="list-disc list-inside text-blue-400 text-md">
                <li>Built using ReactJS for efficient state management and component-based structure.</li>
                <li>Framer Motion for seamless transitions and animations.
                </li>
                <li>Button click sound effects for enhanced interactivity.
                </li>
                <li>Responsive design for optimal performance on any screen size.
                </li>
                <li>Clean, modern UI with intuitive usability.
                </li>
              </ul>
              <div className="flex justify-end mt-6">
                <button onClick={calculator} className="text-blue-400 flex items-center">
                  View <span className="ml-2">➔</span>
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-white border border-orange-500 text-black w-full sm:w-11/12 lg:w-[47%] md:w-5/12 rounded-xl ">
            <div className="video-container bg-black h-60 sm:mb-4 md:mb-4 lg:mb-4 mb-1 rounded-t-xl "   onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
    onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}>
              {/* Replace with <video> tag */}
              <video className="w-full h-full object-cover rounded-xl" src="youe app"  muted></video>
            </div>
            <div className="card-body  sm:lg-6  md:lg-6 lg:pl-6 sm:pr-6 md:pr-6 lg:pr-6 sm:pb-2 md:pb-2 lg-pb-2 sm:pt-2 md:pt-2 lg:pt-2 pl-3 pr-3 pb-2 pt-2">
              <h2 className="sm:text-2xl md:text-2xl lg:text-2xl sm:mb-3 md:mb-3 lg:mb-3 mb-1 font-custom font-bold text-orange-500 text-xl ">Green Coffee Project
              </h2>
              <p className="sm:mb-4 md:mb-4 lg:mb-4 mb-2 font-custom text-black text-md lg:text-md sm:text-md md:text-md">
              A full-stack website built using HTML, CSS, MySQL, and PHP. It includes complete CRUD functionality and session handling for user interactions.
              </p>
              <ul className="list-disc list-inside text-blue-400 text-md">
                <li>Full CRUD operations (Create, Read, Update, Delete) for managing data
                </li>
                <li>Secure session management for user authentication
                </li>
                <li>MySQL database integration for storing and retrieving data
                </li>
                <li>Backend built with PHP for dynamic content management
                </li>
              </ul>
              <div className="flex justify-end mt-[70px]">
                <button  onClick={greenCoffeeProject} className="text-blue-400 flex items-center">
                  View <span className="ml-2">➔</span>
                </button>
              </div>
            </div>
          </div>

          <div ref={kk} className=  "card bg-white border border-orange-500 text-black w-full sm:w-11/12 lg:w-[47%] md:w-5/12 rounded-xl grp ">
            <div className="video-container h-60 sm:mb-4 md:mb-4 lg:mb-4 mb-1 rounded-t-xl"   onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
    onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}>
              {/* Replace with <video> tag */}
              <video className="w-full h-full object-cover rounded-xl text-white" src={first_taskVideo} poster={firsttasktravel} muted ></video>
            </div>
            <div className="card-body  sm:lg-6  md:lg-6 lg:pl-6 sm:pr-6 md:pr-6 lg:pr-6 sm:pb-2 md:pb-2 lg-pb-2 sm:pt-2 md:pt-2 lg:pt-2 pl-3 pr-3 pb-2 pt-2">
              <h2 className="sm:text-2xl md:text-2xl lg:text-2xl sm:mb-3 md:mb-3 lg:mb-3 mb-1 font-custom font-bold text-orange-500 text-xl ">ExplorePak Website</h2>
              <p className="sm:mb-4 md:mb-4 lg:mb-4 mb-2 font-custom text-black text-md lg:text-md sm:text-md md:text-md">
              A fully responsive travel website showcasing the beauty of Pakistan. It includes engaging layouts, travel packages, a gallery, and social media integration for easy exploration.
              </p>
              <ul className="list-disc list-inside text-blue-400 text-md">
                <li>Responsive design using HTML, CSS, and JavaScript.
                </li>
                <li>Gallery with interactive image sliders.

                </li>
                <li>Travel packages section with pricing and ratings.

                </li>
                <li>Social media integration with icons and links.

                </li>
                <li>FAQ section for common queries and travel tips.
                </li>
              </ul>
              <div className="flex justify-end pt-10">
                <button onClick={explorePak} className="text-blue-400 flex items-center">
                  View <span className="ml-2" >➔</span>
                </button>
              </div>
            </div>
          </div>



          <div ref={kk} className=  "card bg-white border border-orange-500 text-black w-full sm:w-11/12 lg:w-[47%] md:w-5/12 rounded-xl grp ">
            <div className="video-container h-60 sm:mb-4 md:mb-4 lg:mb-4 mb-1 rounded-t-xl"  onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
    onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}>
              {/* Replace with <video> tag */}
              <video className="w-full h-full object-cover rounded-xl text-white" src={todovideo} poster={todopic} muted ></video>
            </div>
            <div className="card-body  sm:lg-6  md:lg-6 lg:pl-6 sm:pr-6 md:pr-6 lg:pr-6 sm:pb-2 md:pb-2 lg-pb-2 sm:pt-2 md:pt-2 lg:pt-2 pl-3 pr-3 pb-2 pt-2">
              <h2 className="sm:text-2xl md:text-2xl lg:text-2xl sm:mb-3 md:mb-3 lg:mb-3 mb-1 font-custom font-bold text-orange-500 text-xl ">Todo App</h2>
              <p className="sm:mb-4 md:mb-4 lg:mb-4 mb-2 font-custom text-black text-md lg:text-md sm:text-md md:text-md">
              A ReactJS-based Todo app designed for easy task management. The app offers users an intuitive interface to add, edit, and track daily tasks with a smooth user experience.
              </p>
              <ul className="list-disc list-inside text-blue-400 text-md">
                <li>Built with ReactJS for a dynamic and fast UI.

                </li>
                <li>Task management: Add, edit, and delete tasks.


                </li>
                <li>Real-time updates with state management.


                </li>
                <li>Minimalist and user-friendly design.


                </li>
                <li>Responsive layout for both desktop and mobile users
                </li>
              </ul>
              <div className="flex justify-end pt-4">
                <button onClick={todoApp} className="text-blue-400 flex items-center">
                  View <span className="ml-2" >➔</span>
                </button>
              </div>
            </div>
          </div>


        </div>
      </motion.div>
    </>
      
  )
}

export default Projects
