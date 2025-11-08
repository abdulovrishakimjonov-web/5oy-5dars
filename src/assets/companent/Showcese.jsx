import React from 'react'
import moshincha from '../companent/img/moshincha.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Showcese = () => {
  return (
    <div className='max-w-[1200px] m-auto mb-16'>
        <div>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide><img src={moshincha} alt="" /></SwiperSlide>
        <SwiperSlide><img src={moshincha} alt="" /></SwiperSlide>
        <SwiperSlide><img src={moshincha} alt="" /></SwiperSlide>
        <SwiperSlide><img src={moshincha} alt="" /></SwiperSlide>
        <SwiperSlide><img src={moshincha} alt="" /></SwiperSlide>
        <SwiperSlide><img src={moshincha} alt="" /></SwiperSlide>
      </Swiper>
<form class="max-w-2xl mx-auto ">   
    <label for="default-search" class="mb-2 text-sm font-medium text-[#555555] sr-only dark:text-white"></label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full shadow-lg p-4 ps-10 text-sm text-gray-900 border border-emerald-500 rounded-3xl bg-gray-50 focus:ring-emerald-600 focus:border-b-emerald-700 dark:bg-white dark:border-b-emerald-500 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-emerald-500 dark:focus:border-emerald-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 dark:bg-[#299764] dark:hover:bg-emerald-900 dark:focus:ring-emerald-800"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
</form>
</div>
    </div>

  )
}

export default Showcese