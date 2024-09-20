import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
const Services = () => {




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






  return (
    <>
      <motion.div id='services' variants={kale} initial="hide" whileInView="view" viewport={{ once: true }}  className="w-full lg:pt-16 pt-12 sm:pt-14 sm:px-12 lg:pb-10 bg-[#0f0f0f] lg:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h1 className=" headline font-extrabold text-white lg:text-6xl sm:text-4xl text-3xl">
            My Awesome <span className="text-orange-500">Services For You</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto px-6 sm:px-8 md:px-0 lg:px-0">
            Amit minim mullet non deferrent alamo est sit ala aliquant dolor runs alamo the session enter end 
            minim mullet deferent alamo exercitation aliqua doler alamo exercitat deferrent.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 py-10 px-20 font-custom">
          {/* Card 1 */}
          <div className="bg-[#1b1b1b] text-white p-6 rounded-xl">
            <h3 className="text-xl  mb-4 font-bold">Mobile App Design</h3>
            <p className="text-gray-400 mb-4">
              Denim veldit mullet exercitation alamo consumes consequenct alums nostrium.
            </p>
            <div className="flex justify-start">
  <button className="flex items-center justify-between w-full max-w-xs pl-4 pr-2 py-1 border-2 border-white rounded-full hover:bg-white hover:text-black group">
    <span className="text-sm font-bold">READ MORE</span>
    <div className="flex items-center justify-center w-8 h-8 ml-2 bg-white rounded-full group-hover:bg-orange-500">
      <FontAwesomeIcon icon={faArrowRight} className="text-black" />
    </div>
  </button>
</div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1b1b1b] text-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Website Design</h3>
            <p className="text-gray-400 mb-4">
              Denim veldit mullet exercitation alamo consumes consequenct alums nostrium.
            </p>
            <div className="flex justify-start">
  <button className="flex items-center justify-between w-full max-w-xs pl-4 pr-2 py-1 border-2 border-white rounded-full hover:bg-white hover:text-black group">
    <span className="text-sm font-bold">READ MORE</span>
    <div className="flex items-center justify-center w-8 h-8 ml-2 bg-white rounded-full group-hover:bg-orange-500">
      <FontAwesomeIcon icon={faArrowRight} className="text-black" />
    </div>
  </button>
</div>


           
          </div>

          {/* Card 3 */}
          <div className="bg-[#1b1b1b] text-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Dashboard Design</h3>
            <p className="text-gray-400 mb-4">
              Denim veldit mullet exercitation alamo consumes consequenct alums nostrium.
            </p>
            <div className="flex justify-start">
  <button className="flex items-center justify-between w-full max-w-xs pl-4 pr-2 py-1 border-2 border-white rounded-full hover:bg-white hover:text-black group">
    <span className="text-sm font-bold">READ MORE</span>
    <div className="flex items-center justify-center w-8 h-8 ml-2 bg-white rounded-full group-hover:bg-orange-500">
      <FontAwesomeIcon icon={faArrowRight} className="text-black" />
    </div>
  </button>
</div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#1b1b1b] text-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Product Design</h3>
            <p className="text-gray-400 mb-4">
              Denim veldit mullet exercitation alamo consumes consequenct alums nostrium.
            </p>
            <div className="flex justify-start">
  <button className="flex items-center justify-between w-full max-w-xs pl-4 pr-2 py-1 border-2 border-white rounded-full hover:bg-white hover:text-black group">
    <span className="text-sm font-bold">READ MORE</span>
    <div className="flex items-center justify-center w-8 h-8 ml-2 bg-white rounded-full group-hover:bg-orange-500">
      <FontAwesomeIcon icon={faArrowRight} className="text-black" />
    </div>
  </button>
</div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#1b1b1b] text-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Branding Design</h3>
            <p className="text-gray-400 mb-4">
              Denim veldit mullet exercitation alamo consumes consequenct alums nostrium.
            </p>
            <div className="flex justify-start">
  <button className="flex items-center justify-between w-full max-w-xs pl-4 pr-2 py-1 border-2 border-white rounded-full hover:bg-white hover:text-black group">
    <span className="text-sm font-bold">READ MORE</span>
    <div className="flex items-center justify-center w-8 h-8 ml-2 bg-white rounded-full group-hover:bg-orange-500">
      <FontAwesomeIcon icon={faArrowRight} className="text-black" />
    </div>
  </button>
</div>
          </div>

          {/* Card 6 */}
          <div className="bg-[#1b1b1b] text-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Graphics Design</h3>
            <p className="text-gray-400 mb-4">
              Denim veldit mullet exercitation alamo consumes consequenct alums nostrium.
            </p>
            <div className="flex justify-start">
  <button className="flex items-center justify-between w-full max-w-xs pl-4 pr-2 py-1 border-2 border-white rounded-full hover:bg-white hover:text-black group">
    <span className="text-sm font-bold">READ MORE</span>
    <div className="flex items-center justify-center w-8 h-8 ml-2 bg-white rounded-full group-hover:bg-orange-500">
      <FontAwesomeIcon icon={faArrowRight} className="text-black" />
    </div>
  </button>
</div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Services;
