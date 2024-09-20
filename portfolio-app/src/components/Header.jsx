import React, { useState } from 'react';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Header = () => {

    const redirection = () => {
        window.location.href = "https://www.linkedin.com/in/muhammad-asim-764a8a273/";
    };
    const redirectionGithub = () => {
        window.location.href = "https://github.com/Muhammadasim225/MuhammadAsim";
    };

    // State to toggle the menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const aboutMePage=()=>{
        setIsMenuOpen(false);
    }

    return (
        <header className='headerTop w-full bg-white p-4 shadow-md sticky top-0 z-50'>
            <nav className='navbar flex justify-between items-center lg:justify-between lg:items-center sm:justify-between sm:items-center'>
                {/* Logo Section */}
                <motion.div whileHover={{ scale: 1.05, rotate: "360deg" }} className="logo text-black font-extrabold text-2xl">
                    PORT<span className='text-[#3C9189]'>FOLIO</span>
                </motion.div>

                {/* Hamburger Menu (shown on small screens) */}
                <button className="text-2xl lg:hidden" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>

                {/* Menu Links with Slide Animation for Small Screens */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.ul
                            className="flex flex-col lg:hidden items-center bg-white  text-gray-400 font-bold text-md absolute top-16 left-0 w-full shadow-lg space-y-7 pb-5 "
                            initial={{ height: 0, opacity: 1 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                               {isMenuOpen && (
    <li>
        <Link 
            to="aboutme" 
            smooth={true} 
            duration={700} 
            className='hover:text-orange-500 cursor-pointer'
            onClick={() => setIsMenuOpen(false)}  // Close menu on click
        >
            ABOUT ME
        </Link>
    </li>
)}

                            
{isMenuOpen && (
    <li>
        <Link 
            to="projects" 
            smooth={true} 
            duration={700} 
            className='hover:text-orange-500 cursor-pointer'
            onClick={() => setIsMenuOpen(false)}  // Close menu on click
        >
            PROJECTS
        </Link>
    </li>
)}

{isMenuOpen && (
    <li>
        <Link 
            to="experience" 
            smooth={true} 
            duration={700} 
            className='hover:text-orange-500 cursor-pointer'
            onClick={() => setIsMenuOpen(false)}  // Close menu on click
        >
            EXPERIENCE
        </Link>
    </li>
)}

{isMenuOpen && (
    <li>
        <Link 
            to="skills" 
            smooth={true} 
            duration={700} 
            className='hover:text-orange-500 cursor-pointer'
            onClick={() => setIsMenuOpen(false)}  // Close menu on click
        >
            SKILLS
        </Link>
    </li>
)}

{isMenuOpen && (
    <li>
        <Link 
            to="services" 
            smooth={true} 
            duration={700} 
            className='hover:text-orange-500 cursor-pointer'
            onClick={() => setIsMenuOpen(false)}  // Close menu on click
        >
            SERVICES
        </Link>
    </li>
)}

{isMenuOpen && (
    <li>
        <Link 
            to="contact" 
            smooth={true} 
            duration={700} 
            className='hover:text-orange-500 cursor-pointer'
            onClick={() => setIsMenuOpen(false)}  // Close menu on click
        >
            CONTACT
        </Link>
    </li>
)}


                            {/* Social Links for mobile inside the menu */}
                            <li className="flex justify-center space-x-4 mt-4">
                                <img src={github} onClick={redirectionGithub} alt="github" className='cursor-pointer w-6' />
                                <img src={linkedin} onClick={redirection} alt="linkedin" className='cursor-pointer w-6' />
                            </li>
                        </motion.ul>
                    )}
                </AnimatePresence>

                {/* Menu Links for Large Screens */}
                <ul className="hidden lg:flex space-x-6 text-gray-400 font-bold text-md items-center">
                    <li>
                        <Link to="aboutme" smooth={true} duration={700} className='hover:text-orange-500 cursor-pointer'>
                            ABOUT ME
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={700} className='hover:text-orange-500 cursor-pointer'>
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link to="experience" smooth={true} duration={700} className='hover:text-orange-500 cursor-pointer'>
                            EXPERIENCE
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={700} className='hover:text-orange-500 cursor-pointer'>
                            SKILLS
                        </Link>
                    </li>
                    <li>
                        <Link to="services" smooth={true} duration={700} className='hover:text-orange-500 cursor-pointer'>
                            SERVICES
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={700} className='hover:text-orange-500 cursor-pointer'>
                            CONTACT
                        </Link>
                    </li>
                </ul>

                {/* Social Links for larger screens outside the menu */}
                <div className="hidden lg:flex items-center space-x-4 mr-2">
                    <img src={github} alt="github" onClick={redirectionGithub} className='cursor-pointer w-6' />
                    <img src={linkedin} onClick={redirection} alt="linkedin" className='cursor-pointer w-6' />
                </div>
            </nav>
        </header>
    );
};

export default Header;
