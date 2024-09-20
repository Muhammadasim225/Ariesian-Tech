import React from 'react';
import js from "../assets/images/JavaScript-Logo.png";
import html from "../assets/images/html-removebg-preview.png";
import css from "../assets/images/css-logo.png";
import java from "../assets/images/java-removebg-preview.png";
import react from "../assets/images/react.png";
import nodejs from "../assets/images/nodejs.png";
import blender from "../assets/images/blender (2).png";
import mysql from "../assets/images/mysql.png";
import mongodb from "../assets/images/mongodb.png";
import ccc from "../assets/images/ccc.png";
import python from "../assets/images/python.png";
import { motion } from "framer-motion";

const Skills = () => {
  const fadeInAnimations = {
    initial: {
      opacity: 0,
      y: 5, // Add some vertical movement to the animation for better visual effect
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Adjust duration as needed
        ease: "easeOut",
      },
    },
  };


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

  const container = {
    animate: {
      transition: {
        staggerChildren: 0.2, // Adds delay between card animations
      },
    },
  };

  return (
    <>
      <motion.div id='skills'   variants={kale} initial="hide" whileInView="view" viewport={{ once: true }} className="w-full lg:pt-16 md:pt-16 pt-10 lg:pb-0 pb-0 sm:pt-10 sm:pb-0">
        <div className="head flex flex-col items-center align-middle space-y-3">
          <h1 className="font-extrabold text-black headline lg:text-6xl sm:text-4xl text-3xl">Skills</h1>
        </div>

        {/* Grid layout for skills */}
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="content grid sm:gap-6 md:gap-6 lg:gap-6 gap-6 sm:m-20 md:m-14 lg:m-20 m-14 sm:grid-cols-2 lg:grid-cols-3 justify-center"
        >
          {/* JavaScript */}
          <motion.div
            variants={fadeInAnimations}
            className="card rounded-xl text-orange-500 border border-orange-500 pt-8 pb-5 text-2xl font-custom font-bold hover:bg-gray-50 hover:transition-all"
          >
            <img src={js} alt="JavaScript" className="w-[250px] mx-auto" />
          </motion.div>

          {/* HTML */}
          <motion.div
            variants={fadeInAnimations}
            className="card rounded-xl text-orange-500 border border-orange-500 pt-5 pb-5 px-7 text-2xl font-custom font-bold hover:bg-gray-50 hover:transition-all"
          >
            <img src={html} alt="HTML" className="w-[190px] mx-auto" />
          </motion.div>

          {/* CSS */}
          <motion.div
            variants={fadeInAnimations}
            className="card rounded-xl text-orange-500 border border-orange-500 pt-8 pb-5 px-[75px] text-2xl font-custom font-bold hover:bg-gray-50 hover:transition-all"
          >
            <img src={css} alt="CSS" className="w-[100px] mx-auto" />
          </motion.div>

          {/* Java */}
          <motion.div
            variants={fadeInAnimations}
            className="card rounded-xl text-orange-500 border border-orange-500 pt-11 pb-5 text-2xl font-custom font-bold hover:bg-gray-50 hover:transition-all"
          >
            <img src={java} alt="Java" className="w-[330px] mx-auto" />
          </motion.div>

          {/* React */}
          <motion.div
            variants={fadeInAnimations}
            className="card rounded-xl text-orange-500 border border-orange-500 pt-9 pb-5 px-14 text-2xl font-custom font-bold hover:bg-gray-50 hover:transition-all"
          >
            <img src={react} alt="React" className="w-36 mx-auto" />
          </motion.div>

          {/* Node.js */}
          <motion.div
            variants={fadeInAnimations}
            className="card rounded-xl text-orange-500 border border-orange-500 pt-16 pb-5 px-7 text-2xl font-custom font-bold hover:bg-gray-50 hover:transition-all"
          >
            <img src={nodejs} alt="Node.js" className="w-48 mx-auto" />
          </motion.div>

          {/* MySQL */}
          <motion.div
            variants={fadeInAnimations}
            className="card rounded-xl text-orange-500 border border-orange-500 pt-10 pb-5 px-9 text-2xl font-custom font-bold hover:bg-gray-50 hover:transition-all"
          >
            <img src={mysql} alt="MySQL" className="w-44 mx-auto" />
          </motion.div>

          {/* MongoDB */}
          <motion.div
            variants={fadeInAnimations}
            className="card rounded-xl text-orange-500 border border-orange-500 pt-12 pb-5 px-9 text-2xl font-custom font-bold hover:bg-gray-50 hover:transition-all"
          >
            <img src={mongodb} alt="MongoDB" className="w-48 mx-auto" />
          </motion.div>

          {/* C */}
          <motion.div
            variants={fadeInAnimations}
            className="card rounded-xl text-orange-500 border border-orange-500 pt-8 pb-3 px-2 text-2xl font-custom font-bold hover:bg-gray-50 hover:transition-all"
          >
            <img src={ccc} alt="C Programming" className="w-60 mx-auto" />
          </motion.div>

          {/* Python */}
          <motion.div
            variants={fadeInAnimations}
            className="card rounded-xl text-orange-500 border border-orange-500 pt-10 pb-3 px-16 text-2xl font-custom font-bold hover:bg-gray-50 hover:transition-all"
          >
            <img src={python} alt="Python" className="w-32 mx-auto" />
          </motion.div>

          <motion.div
            variants={fadeInAnimations}
            className="card rounded-xl text-orange-500 border border-orange-500 pt-10 pb-10 pl-7 px-16 text-2xl font-custom font-bold hover:bg-gray-50 hover:transition-all"
          >
            <img src={blender} alt="Python" className="w-62 mx-auto" />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Skills;
