import React from 'react'
import shina from '../companent/img/shina.png'

const Inkul = () => {
  return (
        <section className='mb-20 px-4'>
            <div className='max-w-[1200px] m-auto rounded-2xl w-full border-gray-300 border-2 flex flex-col lg:flex-row items-center px-6 lg:px-10 py-8 lg:py-0 justify-between'>
                <div className='w-full lg:w-auto'>
                    <div className='mb-10 lg:mb-20'>
                    <h2 className='text-[28px] sm:text-[36px] mb-4'>Car rental keeps you safe</h2>
                    <p className='text-[14px] sm:text-[16px]'>The safety of our employees and renters is our number one priority. In <br className='hidden lg:block' /> addition to being confident your vehicle is cleaned and sanitized every <br className='hidden lg:block' /> time you rent, you can also feel confident that we will take every <br className='hidden lg:block' /> opportunity to enhance the health and safety measures currently <br className='hidden lg:block' /> practiced in our operations.</p>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center gap-3'>
                    <div className='w-full sm:w-[200px] rounded-2xl bg-[#F5F5F5] p-3 hover:bg-[#299764] hover:text-white duration-500'>
                        <p className='flex justify-between mb-2'>.<i className="fa-solid fa-flask"></i></p>
                        <p className='text-[16px]'>Every car is <br /> thoroughly sanitized <br /> and cleaned</p>
                    </div>
                    <div className='w-full sm:w-[200px] rounded-2xl bg-[#F5F5F5] p-3 hover:bg-[#299764] hover:text-white duration-500'>
                        <p className='flex justify-between mb-7'>.<i className="fa-solid fa-heart-circle-bolt"></i></p>
                        <p className='text-[16px]'>All of our employees <br /> wear masks</p>
                    </div>
                    <div className='w-full sm:w-[200px] rounded-2xl bg-[#F5F5F5] p-3 hover:bg-[#299764] hover:text-white duration-500'>
                        <p className='flex justify-between mb-2'>.<i className="fa-solid fa-file-circle-xmark"></i></p>
                        <p className='text-[16px]'>We stay up to date with all protocol from the CDC</p>
                    </div>
                    </div>
                </div>
                <div className='w-full lg:w-auto mt-8 lg:mt-0'>
                    <img className='w-full max-w-[400px] mx-auto lg:max-w-none' src={shina} alt="" />
                </div>
            </div>
        </section>
  )
}

export default Inkul