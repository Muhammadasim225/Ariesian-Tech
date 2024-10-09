import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef,useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MiniPlayer from './MiniPlayer';
import {  faPause } from '@fortawesome/free-solid-svg-icons';
import {EffectCoverflow,Pagination,Navigation} from 'swiper/modules';
import slide_img1 from '../assets/images/slide_img1.jpg'
import slide2 from '../assets/images/slide2.jpg'
import slide3 from '../assets/images/slide3.jpg'
import slide4 from '../assets/images/slide4.jpg'
import slide5 from '../assets/images/slide5.jpg'
import slide6 from '../assets/images/slide6.jpg'
import slide7 from '../assets/images/slide7.jpg'
import slide8 from '../assets/images/slide8.jpg'
import slide9 from '../assets/images/slide9.jpg'
import slide10 from '../assets/images/slide10.jpg'
import slide11 from '../assets/images/slide11.jpg'
import playicon from '../assets/images/playicon.png'
import playing from '../assets/images/playing.png'
import audio2 from '../assets/audios/audio2.mp3'
const SongCarousel = () => {
    const [show,setShow]=useState(false);
    const [isPlaying, setIsPlaying] = useState(true); // State to track whether audio is playing
    const audioRef = useRef(null); // Single ref for the audio element
  
    const playmusic = () => {
      try {
        if (audioRef.current) {
          audioRef.current.play(); // Play the audio
          setIsPlaying(false);
          setShow(true) // Set playing state to true
        }
      } catch (error) {
        console.error('Failed to play audio: ', error);
      }
    };
  
    const pauseMusic = () => {
      if (audioRef.current) {
        audioRef.current.pause(); // Pause the audio
        setIsPlaying(true);
        setShow(false) // Set playing state to false
      }
    };

  return (
<div className="container min-w-screen mx-auto pt-10 pb-5 px-2">
<Swiper
   effect={"coverflow"}
   grabCursor={true}
   centeredSlides={true}
   loop={true}
   slidesPerView={"auto"}
   spaceBetween={30}
   coverflowEffect={{
       rotate: 0,
       stretch: 50,
       depth: 340,
       modifier: 0.5,
       slideShadows: false,
   }}

   modules={[EffectCoverflow, Pagination, Navigation]}
   className="swiper_container h-96 w-full"
>

<SwiperSlide className="bgflex flex items-center justify-center rounded-lg overflow-hidden shadow-lg group" style={{ borderRadius: "10%", width: "350px", height: "400px" }}>
    <div className="banner-card w-full h-full object-cover relative">
        <img src={slide2} alt="slide_img" className="w-full h-full object-cover hover:cursor-pointer transition duration-300 group-hover:brightness-50"/>
    </div>
    <div className="fll flex flex-col justify-center items-center align-middle absolute inset-0">
        <div className="circle bg-[#50575f85] w-20 h-20 rounded-full p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer flex items-center justify-center "   onClick={isPlaying ? playmusic : pauseMusic} ref={audioRef}
        >
                    {isPlaying ? (
                        <img src={playicon}   alt="play icon" className="w-8 h-8"/>):(<FontAwesomeIcon icon={faPause}  className="w-8 h-8 text-white"/>)}
        </div>
        <audio ref={audioRef} src={audio2} />

    </div>
</SwiperSlide>

<SwiperSlide className="flex items-center justify-center rounded-lg overflow-hidden shadow-lg group" style={{ borderRadius: "10%", width: "350px", height: "400px" }}>
<div className="banner-card w-full h-full object-cover relative hover:bg-black">

    <img src={slide10} alt="slide_img" className="w-full h-full object-cover group-hover:brightness-50 cursor-pointer"/>
</div>

<div className="fll flex flex-col justify-center items-center align-middle  absolute ">
    
<div className="circle bg-[#50575f85] w-20 h-20 rounded-full p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer flex items-center justify-center "   onClick={isPlaying ? playmusic : pauseMusic} ref={audioRef}
        >
                    {isPlaying ? (
                        <img src={playicon}   alt="play icon" className="w-8 h-8"/>):(<FontAwesomeIcon icon={faPause}  className="w-8 h-8 text-white"/>)}
        </div>
        <audio ref={audioRef} src={audio2} />

    </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center rounded-lg overflow-hidden shadow-lg group" style={{ borderRadius: "10%", width: "350px", height: "400px" }}>
<div className="banner-card w-full h-full object-cover relative hover:bg-black">

    <img src={slide4} alt="slide_img" className="w-full h-full object-cover group-hover:brightness-50 cursor-pointer"/>
</div>
<div className="fll flex flex-col justify-center items-center align-middle  absolute ">
    
<div className="circle bg-[#50575f85] w-20 h-20 rounded-full p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer flex items-center justify-center "   onClick={isPlaying ? playmusic : pauseMusic} ref={audioRef}
        >
                    {isPlaying ? (
                        <img src={playicon}   alt="play icon" className="w-8 h-8"/>):(<FontAwesomeIcon icon={faPause}  className="w-8 h-8 text-white"/>)}
        </div>
        <audio ref={audioRef} src={audio2} />


    </div>

</SwiperSlide>
<SwiperSlide className="flex items-center justify-center rounded-lg overflow-hidden shadow-lg group" style={{ borderRadius: "10%", width: "350px", height: "400px" }}>
<div className="banner-card w-full h-full object-cover relative hover:bg-black">

    <img src={slide3} alt="slide_img" className="w-full h-full object-cover group-hover:brightness-50 cursor-pointer"/>
</div>
<div className="fll flex flex-col justify-center items-center align-middle  absolute ">
    
<div className="circle bg-[#50575f85] w-20 h-20 rounded-full p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer flex items-center justify-center "   onClick={isPlaying ? playmusic : pauseMusic} ref={audioRef}
        >
                    {isPlaying ? (
                        <img src={playicon}   alt="play icon" className="w-8 h-8"/>):(<FontAwesomeIcon icon={faPause}  className="w-8 h-8 text-white"/>)}
        </div>
        <audio ref={audioRef} src={audio2} />


    </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center rounded-lg overflow-hidden shadow-lg group" style={{ borderRadius: "10%", width: "350px", height: "400px" }}>
<div className="banner-card w-full h-full object-cover relative hover:bg-black">
    <img src={slide_img1} alt="slide_img" className="w-full h-full object-cover group-hover:brightness-50 cursor-pointer"/>
    </div>
    <div className="fll flex flex-col justify-center items-center align-middle  absolute ">
    
    <div className="circle bg-[#50575f85] w-20 h-20 rounded-full p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer flex items-center justify-center "   onClick={isPlaying ? playmusic : pauseMusic} ref={audioRef}
        >
                    {isPlaying ? (
                        <img src={playicon}   alt="play icon" className="w-8 h-8"/>):(<FontAwesomeIcon icon={faPause}  className="w-8 h-8 text-white"/>)}
        </div>
        <audio ref={audioRef} src={audio2} />


    </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center rounded-lg overflow-hidden shadow-lg group" style={{ borderRadius: "10%", width: "350px", height: "400px" }}>
<div className="banner-card w-full h-full object-cover relative hover:bg-black">

    <img src={slide5} alt="slide_img" className="w-full h-full object-cover group-hover:brightness-50 cursor-pointer"/></div>
    <div className="fll flex flex-col justify-center items-center align-middle  absolute ">
    
    <div className="circle bg-[#50575f85] w-20 h-20 rounded-full p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer flex items-center justify-center "   onClick={isPlaying ? playmusic : pauseMusic} ref={audioRef}
        >
                    {isPlaying ? (
                        <img src={playicon}   alt="play icon" className="w-8 h-8"/>):(<FontAwesomeIcon icon={faPause}  className="w-8 h-8 text-white"/>)}
        </div>
        <audio ref={audioRef} src={audio2} />

    </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center rounded-lg overflow-hidden shadow-lg group" style={{ borderRadius: "10%", width: "350px", height: "400px" }}>
<div className="banner-card w-full h-full object-cover relative hover:bg-black">

    <img src={slide6} alt="slide_img" className="w-full h-full object-cover group-hover:brightness-50 cursor-pointer"/></div>
    <div className="fll flex flex-col justify-center items-center align-middle  absolute ">
    
    <div className="circle bg-[#50575f85] w-20 h-20 rounded-full p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer flex items-center justify-center "   onClick={isPlaying ? playmusic : pauseMusic} ref={audioRef}
        >
                    {isPlaying ? (
                        <img src={playicon}   alt="play icon" className="w-8 h-8"/>):(<FontAwesomeIcon icon={faPause}  className="w-8 h-8 text-white"/>)}
        </div>
        <audio ref={audioRef} src={audio2} />


    </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center rounded-lg overflow-hidden shadow-lg group" style={{ borderRadius: "10%", width: "350px", height: "400px" }}>
<div className="banner-card w-full h-full object-cover relative hover:bg-black">

    <img src={slide11} alt="slide_img" className="w-full h-full object-cover group-hover:brightness-50 cursor-pointer"/></div>
    <div className="fll flex flex-col justify-center items-center align-middle  absolute ">
    
    <div className="circle bg-[#50575f85] w-20 h-20 rounded-full p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer flex items-center justify-center "   onClick={isPlaying ? playmusic : pauseMusic} ref={audioRef}
        >
                    {isPlaying ? (
                        <img src={playicon}   alt="play icon" className="w-8 h-8"/>):(<FontAwesomeIcon icon={faPause}  className="w-8 h-8 text-white"/>)}
        </div>
        <audio ref={audioRef} src={audio2} />


    </div>

</SwiperSlide>
<SwiperSlide className="flex items-center justify-center rounded-lg overflow-hidden shadow-lg group" style={{ borderRadius: "10%", width: "350px", height: "400px" }}>
<div className="banner-card w-full h-full object-cover relative hover:bg-black">

    <img src={slide9} alt="slide_img" className="w-full h-full object-cover group-hover:brightness-50 cursor-pointer"/></div>
    <div className="fll flex flex-col justify-center items-center align-middle  absolute ">
    
    <div className="circle bg-[#50575f85] w-20 h-20 rounded-full p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer flex items-center justify-center "   onClick={isPlaying ? playmusic : pauseMusic} ref={audioRef}
        >
                    {isPlaying ? (
                        <img src={playicon}   alt="play icon" className="w-8 h-8"/>):(<FontAwesomeIcon icon={faPause}  className="w-8 h-8 text-white"/>)}
        </div>
        <audio ref={audioRef} src={audio2} />


    </div>

</SwiperSlide>
<SwiperSlide className="flex items-center justify-center rounded-lg overflow-hidden shadow-lg group" style={{ borderRadius: "10%", width: "350px", height: "400px" }}>
<div className="banner-card w-full h-full object-cover relative hover:bg-black">

    <img src={slide7} alt="slide_img" className="w-full h-full object-cover group-hover:brightness-50 cursor-pointer"/></div>
    <div className="fll flex flex-col justify-center items-center align-middle  absolute ">
    
    <div className="circle bg-[#50575f85] w-20 h-20 rounded-full p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer flex items-center justify-center "   onClick={isPlaying ? playmusic : pauseMusic} ref={audioRef}
        >
                    {isPlaying ? (
                        <img src={playicon}   alt="play icon" className="w-8 h-8"/>):(<FontAwesomeIcon icon={faPause}  className="w-8 h-8 text-white"/>)}
        </div>
        <audio ref={audioRef} src={audio2} />


    </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center rounded-lg overflow-hidden shadow-lg group" style={{ borderRadius: "10%", width: "350px", height: "400px" }}>
<div className="banner-card w-full h-full object-cover relative hover:bg-black">

    <img src={slide8} alt="slide_img" className="w-full h-full object-cover group-hover:brightness-50 cursor-pointer"/></div>
    <div className="fll flex flex-col justify-center items-center align-middle  absolute ">
    
    <div className="circle bg-[#50575f85] w-20 h-20 rounded-full p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer flex items-center justify-center "   onClick={isPlaying ? playmusic : pauseMusic} ref={audioRef}
        >
                    {isPlaying ? (
                        <img src={playicon}   alt="play icon" className="w-8 h-8"/>):(<FontAwesomeIcon icon={faPause}  className="w-8 h-8 text-white"/>)}
        </div>
        <audio ref={audioRef} src={audio2} />


    </div>

</SwiperSlide>
<SwiperSlide className="flex items-center justify-center rounded-lg overflow-hidden shadow-lg group"style={{ borderRadius: "10%", width: "350px", height: "400px" }}>
<div className="banner-card w-full h-full object-cover relative hover:bg-black">

    <img src={slide_img1} alt="slide_img" className="w-full h-full object-cover group-hover:brightness-50 cursor-pointer"/></div>
    <div className="fll flex flex-col justify-center items-center align-middle  absolute ">
    
    <div className="circle bg-[#50575f85] w-20 h-20 rounded-full p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer flex items-center justify-center "   onClick={isPlaying ? playmusic : pauseMusic} ref={audioRef}
        >
                    {isPlaying ? (
                        <img src={playicon}   alt="play icon" className="w-8 h-8"/>):(<FontAwesomeIcon icon={faPause}  className="w-8 h-8 text-white"/>)}
        </div>
        <audio ref={audioRef} src={audio2} />


    </div>
</SwiperSlide>

           
        </Swiper>
        <MiniPlayer show={show}  playMusic={playmusic}
        pauseMusic={pauseMusic}
        audioRef={audioRef}></MiniPlayer>

    </div>       
  )
}

export default SongCarousel
