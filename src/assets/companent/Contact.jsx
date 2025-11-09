import React from 'react'
import { FEATURES } from '../../static/min'

const Contact = () => {
  return (
    <div>
        <section className='mb-20'>
            <div className='max-w-[1200px] m-auto px-4'>
                <div className='mb-10'>
                    <h2 className='text-[28px] sm:text-[36px] font-semibold text-center mb-2'>Unparalleled service</h2>
                    <p className='text-[16px] text-[#555555] text-center'>Whether you are looking for Newark Airport car rental, an insurance replacement <br className='hidden sm:block' /> vehicle or minivan to take on vacation Car rental has it all.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                 {
                    FEATURES.map((item) => (
                        <div key={item.id} className='w-full max-w-[590px] mx-auto rounded-2xl bg-[#F5F5F5] flex items-center justify-between px-5 py-5 hover:bg-[#299764] hover:text-white duration-500'>
                            <div className='flex-1'>
                            <p className='text-[24px] sm:text-[32px] max-w-[231px]'>{item.title}</p>
                            <p className='text-[14px] sm:text-[16px] max-w-[354px] text-[#555555]'>{item.description}</p>
                            </div>
                            <img className='w-[50px] sm:w-[60px] flex-shrink-0 ml-4' src={item.icon} alt="" />
                        </div>
                    ))
                 }
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact