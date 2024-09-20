import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPlane,faArrowTurnDown} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn,faInstagram, faFacebookF} from '@fortawesome/free-brands-svg-icons';  // Import LinkedIn icon
import { motion } from 'framer-motion';
const Contact = () => {
    const redirection=()=>{
        window.location.href = "https://www.linkedin.com/in/muhammad-asim-764a8a273/";
    }
    const redirectionInstagram=()=>{
        window.location.href="https://www.instagram.com/muhammadasim4927/";

    }
    const redirectionFacebook=()=>{
        window.location.href="https://www.facebook.com/profile.php?id=100007728857565";

    }


    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formData = {
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        };
      
        try {
          const response = await fetch("http://localhost:5000/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            alert("Message sent successfully!");
          } else {
            alert("Failed to send message. Try again later.");
          }
        } catch (error) {
          console.error(error);
          alert("Error sending message.");
        }
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





    return (
        <motion.div id="contact" variants={kale} initial="hide" whileInView="view" viewport={{ once: true }} className="w-full lg:pt-16 md:pt-16 sm:pt-12 pt-8 pb-0 px-3 md:px-10 lg:px-20">
            {/* Head Section */}
            <div className="head flex flex-col items-center lg:space-y-3 md:space-y-3 sm:space-y-3 space-y-2 text-center">
                <h1 className='font-extrabold text-black headline sm:text-4xl md:text-5xl lg:text-6xl text-3xl'>Contact</h1>
                <h6 className='text-orange-500 sm:text-sm md:text-md lg:text-lg font-semibold text-sm'>
                    Do you have a project in your mind? Contact me here
                </h6>
            </div>

            {/* Main Contact Section */}
            <div className="flex flex-col md:flex-row gap-6 py-10 sm:px-10 md:px-0 ">
                {/* Contact Info Box */}
                <div className="bg-[#3C9189] lg:rounded-xl md:rounded-xl sm:rounded-xl text-white p-6 md:p-8 flex flex-col space-y-1 justify-center items-start w-full md:w-1/2">
                    <h1 className='font-bold text-2xl mb-3'>Find Me <FontAwesomeIcon icon={faArrowTurnDown}  className='text-[24px] ml-1 font-extrabold'/></h1>
                    <p className='text-lg pb-1'>📧 Email: muhammadasim4927@gmail.com</p>
                    <p className='text-lg flex items-center pt-1'>
                        <FontAwesomeIcon icon={faPhone} className='mr-3' /> 
                        Tel: +92 312 5818370
                    </p>
                    <p className='text-lg flex items-center'>
                        <FontAwesomeIcon icon={faPhone} className='mr-3' /> 
                        Tel: +92 331 3399915
                    </p>
                    <p className='text-xl font-bold pt-3'>Feel free to reach out us on.</p>
                    <div className="iop flex space-x-5 pt-4">
                    <p className='text-xl flex items-center '>
                    <FontAwesomeIcon onClick={redirection} icon={faLinkedinIn} className=' transition-transform duration-300 hover:scale-110 cursor-pointer'  /> 
                    </p>
                    <p className='text-xl flex items-center'>
                    <FontAwesomeIcon icon={faInstagram} onClick={redirectionInstagram} className=' transition-transform duration-300 hover:scale-110 cursor-pointer' /> 
                    </p>
                    <p className='text-xl flex items-center'>
                    <FontAwesomeIcon icon={faFacebookF} onClick={redirectionFacebook} className=' transition-transform duration-300 hover:scale-110 cursor-pointer' /> 
                    </p>

                    </div>
                  
                </div>

                {/* Contact Form */}

                <div className="flex flex-col space-y-10 w-full md:w-1/2">
                <form id="contactForm" onSubmit={handleSubmit} className='space-y-3'>


                    {/* Full-width Name and Email input fields */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            className="p-4 border-2 mx-auto rounded-lg w-full outline-none"
                            type="text" name="name"
                            placeholder="Name"
                        />
                        <input
                            className="p-4 border-2 rounded-lg w-full outline-none"
                            type="email" name="email"
                            placeholder="Email"
                        />
                    </div>

                    {/* Message Input */}
                    <textarea
                        className="p-4 border-2 rounded-lg h-40 sm:h-52 w-full outline-none"
                        placeholder="Message" name="message"
                    />

                    {/* Send Button */}
                    <button type="submit" className="bg-[#3C9189] text-white py-4 px-10 rounded-lg flex justify-center items-center hover:bg-[#2b7068] transition-colors mx-auto text-lg">
                        Send <FontAwesomeIcon icon={faPlane} className='ml-3' />
                    </button>
                    </form>

                </div>

            </div>
        </motion.div>
    );
};

export default Contact;
