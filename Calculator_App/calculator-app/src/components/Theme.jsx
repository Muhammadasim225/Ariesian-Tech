import React, { useState } from 'react';
import { easeIn, easeInOut, motion, spring } from "framer-motion"
import sound from '../assets/img/zapsplat_office_calculator_button_single_press_004_81854.wav'
import bg from '../assets/img/8c43645fe8d0ac164a6925448be32858.jpg'
const Calculator = () => {
  const [display, setDisplay] = useState("");
  const handleClick = (e) => {
    // Play the sound
    new Audio(sound).play();
    // Update the display
    setDisplay(display + e.target.value);
  };


  const clearButton=()=>{
    new Audio(sound).play();
    setDisplay("")
  }
  const equalButton=()=>{
    new Audio(sound).play();
    setDisplay(eval(display))
    
  }
  const list={
    hide:{
      opacity:0,
      x:'100vw',

    },

    visi:{
      opacity:1,
      x:0,

      
      transition:{
        type:"spring",
        stiffness: 300,  // Lower stiffness for more bounce
        damping: 50,      // Lower damping for more bounce
        mass: 1,         // Adjust mass if needed
        duration: 0.5,   // Animation duration
        delay: 1,
        when: "beforeChildren",
        staggerChildren: 0.2, // Stagger children with 0.2s delay


      }
    
    }
  }
  const sharp={
    start:{
      opacity:0,
      y:'-100vh',
    },
    end:{
      opacity:1,
      y:0,
      transition:{
        duration: 0.5, // Animation duration
        delay: 1.5, 
        type: "spring", 
        stiffness:30,
      }

    }
  }

  // const [apply,notApply]=useState();

  return (
    <div className="min-h-screen flex items-center justify-center  overflow-x-hidden perspective-1000 shadow-xl"  style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-white opacity-40"></div>

      <motion.div variants={list} initial="hide" animate="visi" className="calculator z-10 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[500px] bg-white rounded-3xl overflow-hidden shadow-2xl" >
        {/* Display Section */}
        <div  className="bg-gradient-to-r from-[#c44aa5] to-[#78347c] h-24 flex items-center justify-end px-5 text-5xl font-bold text-white shadow-2xl"  >
          {display}
        </div>

        {/* Keypad Section */}
        <div className="bg-[#383434] grid grid-cols-4 gap-2 p-6 shadow-2xl">
          {/* First Row */}
          <motion.input
            type="button"
            value="AC"  variants={sharp} initial="start"
            animate="end"
            className="bg-[#383434] border border-white text-white rounded-full py-4 text-xl hover:bg-gray-600 cursor-pointer "
            onClick={clearButton}
          />
          <motion.input  variants={sharp} initial="start"
            animate="end"
            type="button"
            value="+/-"
            className="bg-[#383434] border border-white text-white rounded-full py-4 text-xl hover:bg-gray-600 cursor-pointer"
            onClick={handleClick}

          />
          <motion.input
            type="button"
            value="%"  variants={sharp} initial="start"
            animate="end"
            className="bg-[#383434] border border-white text-white rounded-full py-4 text-xl hover:bg-gray-600 cursor-pointer"
            onClick={handleClick}
          />
          <motion.input
            type="button"
            value="÷" variants={sharp} initial="start"
            animate="end"
            className="bg-[#383434] text-white rounded-full py-4 text-xl border border-[#c44aa5] hover:bg-[#c44aa5] hover:border-none cursor-pointer"
            onClick={handleClick}
          />

          {/* Second Row */}
          <motion.input
            type="button"
            value="7"
            variants={sharp} initial="start"
            animate="end"
            className="bg-[#383434] text-white rounded-full py-4 text-3xl border border-white hover:bg-gray-600 cursor-pointer"
            onClick={handleClick}
          />
          <motion.input
            type="button"
            value="8"
            className="bg-[#383434] text-white rounded-full py-4 text-3xl border border-white hover:bg-gray-600 cursor-pointer" variants={sharp} initial="start" animate="end"
            onClick={handleClick}
          />
          <motion.input
            type="button"
            value="9"  variants={sharp} initial="start"
            animate="end"
            className="bg-[#383434] text-white rounded-full py-4 text-3xl border border-white hover:bg-gray-600 cursor-pointer"
            onClick={handleClick}
          />
          <motion.input
            type="button"
            value="*"  variants={sharp} initial="start"
            animate="end"
            className="bg-[#383434] text-white rounded-full py-4 text-3xl border border-[#c44aa5] hover:bg-[#c44aa5] hover:border-none cursor-pointer"
            onClick={handleClick}
          />

          {/* Third Row */}
          <motion.input
            type="button"
            value="4"  variants={sharp} initial="start"
            animate="end"
            className="bg-[#383434] text-white rounded-full py-4 text-3xl border border-white hover:bg-gray-600 cursor-pointer"
            onClick={handleClick}
          />
          <motion.input
            type="button"
            value="5"  variants={sharp} initial="start"
            animate="end"
            className="bg-[#383434] text-white rounded-full py-4 text-3xl border border-white hover:bg-gray-600 cursor-pointer"
            onClick={handleClick}
          />
          <motion.input
            type="button"
            value="6"  variants={sharp} initial="start"
            animate="end"
            className="bg-[#383434] text-white rounded-full py-4 text-3xl border border-white hover:bg-gray-600 cursor-pointer"
            onClick={handleClick}
          />
          <motion.input
            type="button"
            value="-"  variants={sharp} initial="start"
            animate="end"
            className="bg-[#383434] text-white rounded-full py-4 text-3xl border border-[#c44aa5] hover:bg-[#c44aa5] hover:border-none cursor-pointer"
            onClick={handleClick}
          />

          {/* Fourth Row */}
          <motion.input
            type="button"
            value="1"  variants={sharp} initial="start"
            animate="end"
            className="bg-[#383434] text-white rounded-full py-4 text-3xl border border-white hover:bg-gray-600 cursor-pointer"
            onClick={handleClick}
          />
          <motion.input
            type="button"
            value="2"  variants={sharp} initial="start"
            animate="end"
            className="bg-[#383434] text-white rounded-full py-4 text-3xl border border-white hover:bg-gray-600 cursor-pointer"
            onClick={handleClick}
          />
          <motion.input
            type="button"
            value="3"  variants={sharp} initial="start"
            animate="end"
            className="bg-[#383434] text-white rounded-full py-4 text-3xl border border-white hover:bg-gray-600 cursor-pointer"
            onClick={handleClick}
          />
          <motion.input
            type="button"
            value="+"  variants={sharp} initial="start"
            animate="end"
            className="bg-[#383434] text-white rounded-full py-4 text-3xl border border-[#c44aa5] hover:bg-[#c44aa5] hover:border-none cursor-pointer"
            onClick={handleClick}
          />

          {/* Fifth Row */}
          <motion.input
            type="button"
            value="0"  variants={sharp} initial="start"
            animate="end"
            className="col-span-2 bg-[#383434] text-white rounded-full py-4 text-3xl border border-[#c44aa5] hover:bg-[#c44aa5] hover:border-none cursor-pointer"
            onClick={handleClick}
          />
          <motion.input
            type="button"
            value="."  variants={sharp} initial="start"
            animate="end"
            className="bg-[#383434] text-white rounded-full py-4 text-3xl border border-[#c44aa5] hover:bg-[#c44aa5] hover:border-none cursor-pointer"
            onClick={handleClick}
          />
          <motion.input
            type="button"
            value="="  variants={sharp} initial="start"
            animate="end"
            className="bg-[#383434] text-white rounded-full py-4 text-3xl border border-[#c44aa5] hover:bg-[#c44aa5] hover:border-none cursor-pointer"
            onClick={equalButton}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Calculator;
