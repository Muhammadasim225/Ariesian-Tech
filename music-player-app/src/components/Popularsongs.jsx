import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import pop1 from '../assets/images/pop1.jpg'
import pop2 from '../assets/images/pop2.jpg'
import pop3 from '../assets/images/pop3.jpg'
import pop4 from '../assets/images/pop4.jpg'
import pop5 from '../assets/images/pop5.jpg'
import pop6 from '../assets/images/pop6.jpg'
const Popularsongs = () => {
  return (
    <div className='mx-5 mb-32 mt-2'>
      {/* Title and Arrow buttons */}
      <div className="fli flex flex-row items-center justify-between mb-5">
        <h1 className='text-white text-2xl font-semibold'>Popular Songs</h1>
        <div className="flex items-center gap-2">
          <div className="swiper-button-prev-custom font-extralight text-white cursor-pointer p-2 text-4xl">
            &lt;
          </div>
          <div className="swiper-button-next-custom font-extralight text-white cursor-pointer p-2 text-4xl">
            &gt;
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="wrapper flex flex-row overflow-hidden">
        <Swiper
          grabCursor={true}
          centeredSlides={false} 
          loop={true}
          slidesPerView={4} 
          spaceBetween={20} 
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container h-auto w-full"
        >
          {/* Swiper Slide Cards */}
          <SwiperSlide className="flex items-center justify-center hover:cursor-pointer">
            <div className="cards w-[250px] h-[300px] rounded-3xl bg-gradient-to-b from-orange-500 to-orange-900 px-4 pb-4 flex flex-col justify-end text-white">
              <img src={pop1} className='mb-6 rounded-2xl' alt="" />
              <h3 className="text-lg font-bold">Golden Days</h3>
              <p>Felix Carter</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="cards w-[250px] h-[300px] rounded-3xl bg-gradient-to-b from-emerald-400 to-emerald-900 px-4 pb-4 flex flex-col justify-end text-white hover:cursor-pointer">
            <img src={pop2} className='mb-6 rounded-2xl' alt="" />
              <h3 className="text-lg font-bold">Fading Horizon</h3>
              <p>Ella Hunt</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="cards w-[250px] h-[300px] rounded-3xl bg-gradient-to-b from-blue-900 to-blue-950 px-4 pb-4 flex flex-col justify-end text-white hover:cursor-pointer">
            <img src={pop3} className='mb-6 rounded-2xl' alt="" />

              <h3 className="text-lg font-bold">Waves of Time</h3>
              <p>Lana Rivers</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="cards w-[250px] h-[300px] rounded-3xl bg-gradient-to-b from-orange-200 to-orange-700 px-4 pb-4 flex flex-col justify-end text-white hover:cursor-pointer">
            <img src={pop4} className='mb-6 rounded-2xl' alt="" />
              <h3 className="text-lg font-bold">Electric Dreams</h3>
              <p>Mia Lowell</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="cards w-[250px] h-[300px] rounded-3xl bg-gradient-to-b from-cyan-700 to-cyan-950 px-4 pb-4 flex flex-col justify-end text-white hover:cursor-pointer">
            <img src={pop5} className='mb-6 rounded-2xl' alt="" />
              <h3 className="text-lg font-bold">Shadows & Light</h3>
              <p>Ryan Miles</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="cards w-[250px] h-[300px] rounded-3xl bg-gradient-to-b from-red-500 to-red-900 px-4 pb-4 flex flex-col justify-end text-white hover:cursor-pointer">
            <img src={pop6} className='mb-6 rounded-2xl' alt="" />

              <h3 className="text-lg font-bold">Echoes of Midnight</h3>
              <p>Jon Hickman</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Popularsongs;
