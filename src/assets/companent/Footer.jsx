import React from 'react'
import logo from '../companent/svg/logo.svg'
import instagram from '../companent/svg/instagram.svg'
import tinme from '../companent/svg/tinme.svg'
import faisbuk from '../companent/svg/faisbuk.svg'
import watsap from '../companent/svg/watsap.svg'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className='w-full h-0.5 bg-gray-300 mb-10'></div>
            <div className='max-w-[1200px] m-auto px-4 flex flex-col lg:flex-row justify-between gap-10'>
                <div className='w-full lg:w-auto'>
                    <img className='mb-5' src={logo} alt="" />
                    <p className='text-[12px] text-[#555555] mb-10'>Car rental offers a wide range of cars <br className='hidden sm:block' /> available for rent in Newark EWR <br className='hidden sm:block' /> Airport NJ. We pride ourselves in our <br className='hidden sm:block' /> customer service, and hassle-free <br className='hidden sm:block' /> renting experience.</p>
                    <a className='text-[16px]' href="#">© 2022 Car rental <br />Terms & Conditions</a>
                </div>
                <div className='w-full lg:w-auto'>
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 mb-3'>
                    <div className='flex flex-col gap-2'>
                    <b className='text-[16px]'>Main</b>
                    <a className='text-[14px] text-[#555555] hover:text-gray-600 hover:underline' href="#">My Bookings</a>
                    <a className='text-[14px] text-[#555555] hover:text-gray-600 hover:underline' href="#">My Bookings</a>
                </div>
                <div className='flex flex-col gap-2'>
                    <b className='text-[16px]'>Categories</b>
                    <a className='text-[14px] text-[#555555] hover:text-gray-600 hover:underline' href="#">Compact</a>
                    <a className='text-[14px] text-[#555555] hover:text-gray-600 hover:underline' href="#">Sports cars</a>
                    <a className='text-[14px] text-[#555555] hover:text-gray-600 hover:underline' href="#">Vans</a>
                </div>
                <div className='flex flex-col gap-2'>
                    <b className='text-[16px]'>Company</b>
                    <a className='text-[14px] text-[#555555] hover:text-gray-600 hover:underline' href="#">About us</a>
                    <a className='text-[14px] text-[#555555] hover:text-gray-600 hover:underline' href="#">Careers</a>
                    <a className='text-[14px] text-[#555555] hover:text-gray-600 hover:underline' href="#">News</a>
                    <a className='text-[14px] text-[#555555] hover:text-gray-600 hover:underline' href="#">Contact us</a>
                </div>
                <div className='flex flex-col gap-2'>
                    <b className='text-[16px]'>Our Locations</b>
                    <a className='text-[14px] text-[#555555] hover:text-gray-600 hover:underline' href="#">2118 Thornridge Cir. Syracuse</a>
                    <a className='text-[14px] text-[#555555] hover:text-gray-600 hover:underline' href="#">4140 Parker Rd. Allentown</a>
                    <a className='text-[14px] text-[#555555] hover:text-gray-600 hover:underline' href="#">4517 Washington Ave.</a>
                </div>
                </div>
                <div className='w-full h-0.5 bg-gray-300 mb-5'></div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                    <div className='flex flex-col gap-2'>
                    <b className='text-[16px]'>Contact</b>
                    <a className='text-[14px] text-[#555555] hover:text-gray-600 hover:underline' href="#">+1 855 420 0000</a>
                    <a className='text-[14px] text-[#555555] hover:text-gray-600 hover:underline' href="#">carrental@gmail.com</a>
                </div>
                <div className='flex flex-col gap-2'>
                    <b className='text-[16px]'>Hours of operation</b>
                    <a className='text-[14px] text-[#555555] hover:text-gray-600 hover:underline' href="#">8:00 - 21:00 Mon-Sat </a>
                    <a className='text-[14px] text-[#555555] hover:text-gray-600 hover:underline' href="#">9:00 - 15:00 Sundays</a>
                </div>
                <div className='flex flex-col gap-2'>
                    <b className='text-[16px]'>Social network</b>
                    <div className='flex gap-3'>
                        <img src={instagram} alt="" />
                        <img src={tinme} alt="" />
                        <img src={faisbuk} alt="" />
                        <img src={watsap} alt="" />
                    </div>
                </div>
                </div>
                </div>
            </div>
            
        </footer>
    </div>
  )
}

export default Footer