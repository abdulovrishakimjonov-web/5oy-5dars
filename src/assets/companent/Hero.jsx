import React from 'react'
import google from '../companent/svg/google.svg'
import user from '../companent/img/user.png'
import orde from '../companent/svg/orde.svg'
import nasa from '../companent/svg/nasa.svg'
import tayota from '../companent/svg/tayota.svg'
import doge from '../companent/svg/doge.svg'
import huyndai from '../companent/svg/huyndai.svg'
import shift from '../companent/svg/shift.svg'

const Hero = () => {
  return (
    <div className='mb-20'>
        <div className='bg-[#F5F5F5] mb-20'>
        <section className='max-w-[1200px] m-auto py-18 px-4'>
            <div className='w-full rounded-3xl bg-white flex flex-col lg:flex-row justify-between items-center'>
                <div className='p-10'>
                    <a className='text-[16px] text-blue-400 flex items-center gap-2 mb-5' href="#"><img src={google} alt="" />From Google</a>
                    <h2 className='text-[28px] sm:text-[38px] mb-8'>Hear what the <br /> community is <br /> saying</h2>
                    <div className='w-full max-w-[330px] mb-5 h-0.5 bg-gradient-to-r from-red-500 via-blue-500 via-yellow-400 to-green-500'></div>
                    <p className='text-[14px] mb-5'>More interesting reviews on Instagram</p>
                    <button className='w-[191px] p-3 cursor-pointer rounded-3xl border border-red-500 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-clip-text text-transparent'>Instagram</button>
                </div>
                <div className='w-full lg:w-auto'>
                    <div>
                        <img className='rounded-e-3xl w-full lg:w-auto' src={user} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div className='max-w-[1200px] m-auto px-4'>
        <h3 className='text-[24px] mb-6'>More than 50 brands of cars</h3>
        <div className='flex flex-wrap justify-center lg:justify-between items-center gap-6'>
            <img className='max-w-[100px] sm:max-w-[120px]' src={orde} alt="" />
            <img className='max-w-[100px] sm:max-w-[120px]' src={nasa} alt="" />
            <img className='max-w-[100px] sm:max-w-[120px]' src={tayota} alt="" />
            <img className='max-w-[100px] sm:max-w-[120px]' src={doge} alt="" />
            <img className='max-w-[100px] sm:max-w-[120px]' src={huyndai} alt="" />
            <img className='max-w-[100px] sm:max-w-[120px]' src={shift} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Hero