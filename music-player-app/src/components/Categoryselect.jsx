import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
const Categoryselect = () => {

    const categories = [
        'All', 'Relax', 'Sad', 'Party', 'Romance',
        'Energetic', 'Relaxing', 'Jazz', 'Alternative', 'All','Alternative','Relaxing'
    ];

    return (
        <div className='flex flex-col space-y-5 m-5'>
     <div className="fli flex flex-row items-center justify-between">
    <h1 className='text-white text-2xl font-semibold'>Select Categories</h1>

    {/* Arrow buttons container */}
    <div className="flex items-center gap-2">
        <div className="swiper-button-prev-cust font-extralight text-white cursor-pointer p-2 text-4xl">
            &lt;
        </div>
        <div className="swiper-button-next-cust font-extralight text-white cursor-pointer p-2 text-4xl">
            &gt;
        </div>
    </div>
</div>

            <div className="btns flex mx-auto w-[950px] overflow-hidden">
                <Swiper
                    grabCursor={true}
                    centeredSlides={false} 
                    loop={true}
                    slidesPerView="auto" 
                    spaceBetween={15} 
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 100,
                        depth: 0,
                        modifier: 0.5,
                        slideShadows: false,
                    }}
                    navigation={{
                        prevEl: '.swiper-button-prev-cust',
                        nextEl: '.swiper-button-next-cust',
                      }}

                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container h-auto w-[1000px]"
                >

                    {categories.map((category) => (
                                            <SwiperSlide className="flex  items-center justify-center rounded-lg overflow-hidden shadow-lg" style={{ width: "auto", height: "50px" }}>

                        <button
                            key={category}
                            className={`px-5 py-2 rounded-full border transition-all 
                'bg-transparent border-white text-white hover:bg-emerald-500 hover:text-black hover:border-spacing-none'
            `}
                        >
                            {category}
                        </button>
                        </SwiperSlide>

                    ))}
                </Swiper>
                
            </div>
        </div>
    );
};

export default Categoryselect;
