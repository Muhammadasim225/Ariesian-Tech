import React from 'react';
import { motion } from 'framer-motion';
import logAl from '../assets/images/LogoAL.png'
import ariesian from '../assets/images/ariesian.jpg'

const Experience = () => {

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

  return (
    <motion.div id='experience' variants={kale} initial="hide" whileInView="view" viewport={{ once: true }}  className="w-full lg:px-16 md:px-12 sm:px-6 px-4 lg:pt-16 md:pt-16 pt-8 sm:pt-12 pb-6 bg-[#0f0f0f] text-white">
      <div className="head flex flex-col items-center align-middle space-y-3">
        <span className="font-extrabold text-white headline lg:text-6xl sm:text-4xl text-3xl">Work <span className='lg:text-6xl text-orange-500 sm:text-4xl text-3xl'>Experience</span></span>
      </div>

      <div className="content my-20 w-full relative z-[0.5px]">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-[#4d5c8f]"></div>

        {/* Experience 1 */}
        <div className="flex items-center w-full mb-8 font-custom">
          <div className="w-1/2 flex justify-end pr-4 md:pr-8">
            <div className="bg-[#1b1b1b] p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h3 className="lg:text-2xl sm:text-lg font-bold mb-5 text-md">Web Developer Intern (JULY 2024 - Present)</h3>
              <p className="mt-2 text-gray-400 sm:text-sm text-sm">
              During my internship at Appium Logics Solutions, I worked on developing and enhancing web applications using technologies such as HTML, CSS, JavaScript, Bootstrap, PHP. I gained hands-on experience in frontend and backend development, collaborating with the team to create responsive and user-friendly websites.
              </p>
            </div>
          </div>
          {/* Center icon */}
          <div className="w-10 h-10 bg-[#4d5c8f] rounded-full border-4 border-white flex items-center justify-center">
            <img src={logAl} alt="UNT Logo" className="w-8 h-8 rounded-full z-10" />
          </div>
          <div className="w-1/2"></div>
        </div>

        {/* Experience 2 */}
        <div className="flex items-center w-full mb-8 font-custom">
          <div className="w-1/2"></div>
          <div className="w-10 h-10 bg-[#4d5c8f] rounded-full border-4 border-white flex items-center justify-center">
            <img src={ariesian} alt="Other Logo" className="w-8 h-8 z-10 rounded-full" />
          </div>
          <div className="w-1/2 pl-4 md:pl-8">
            <div className="bg-[#1b1b1b] p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h3 className="lg:text-2xl sm:text-lg font-bold mb-5 text-md">Front End Developer (Sep 2024 - Present)</h3>
              <p className="mt-2 text-gray-400 sm:text-sm text-sm">
              I am gaining practical experience with technologies like Javascript, Reactjs, and Nodejs mongodb. I am collaborating with the team on projects aimed at enhancing user interfaces and website performance while developing my problem-solving and design skills in a fast-paced environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
