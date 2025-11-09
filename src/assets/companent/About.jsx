import React from 'react'
import { LINKS } from '../../static/min'

const About = () => {
  return (
    <div className='max-w-[1200px] m-auto mb-20 px-4'>
  <div>
    <h2 className='text-[36px] sm:text-[36px] text-center'>Choose the car of your dreams</h2>
    <p className='text-[#555555] text-[16px] text-center mb-5'>We provide our customers with the most incredible driving emotions. <br className='hidden sm:block' />That is why there are only world-class cars in our fleet</p>
    <div className='flex flex-wrap gap-3 justify-center mb-8'>
      <button className='w-[155px] p-3 border cursor-pointer bg-gray-200 border-gray-500 rounded-3xl hover:bg-[#299764] duration-500 hover:text-white'>Compact</button>
      <button className='w-[155px] p-3 border cursor-pointer bg-gray-200 border-gray-500 rounded-3xl hover:bg-[#299764] duration-500 hover:text-white'> Sports cars</button>
      <button className='w-[155px] p-3 border cursor-pointer bg-gray-200 border-gray-500 rounded-3xl hover:bg-[#299764] duration-500 hover:text-white'> Vans</button>
    </div>
  </div>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
    {
        LINKS.map((item) => (
                <div key={item.id} className='w-full max-w-[385px] mx-auto rounded-2xl bg-gray-200 p-5 hover:bg-[#299764] hover:text-white transition-all duration-500 ease-in-out'>
                <p className='text-[24px] font-semibold'>{item.title}</p>
                <p className='text-[16px] text-gray-500'>{item.transmission}</p>
                <img className='py-2 w-full' src={item.image} alt="no image" />
                <div className='flex gap-4 mb-5'>
                <p className='text-[16px] flex items-center gap-1'><i className="fa-solid fa-user"></i>{item.seats}</p>
                <p className='text-[16px] flex items-center gap-1'><i className="fa-solid fa-globe"></i>{item.transmission}</p>
                </div>
                <div className='flex gap-4'>
                <p className='text-[16px] flex items-center gap-1'><i className="fa-solid fa-image-portrait"></i>{item.ageRequirement}</p>
                <p className='text-[16px] flex items-center gap-1'><i className="fa-solid fa-droplet"></i>{item.fuel}</p>
                </div>
                <p>{item.isAvailable}</p>
            </div>
        ))
    }
  </div>
  <div className='flex justify-center'><button className='w-[173px] cursor-pointer bg-[#299764] p-3 duration-500 text-white rounded-3xl hover:bg-emerald-900'>View all cars</button></div>
</div>

  )
}

export default About