import React from 'react'
import { LINKS } from '../../static/min'

const About = () => {
  return (
    <div className='max-w-[1200px] m-auto'>
  <div>
    <h2 className='text-[36px] text-center'>Choose the car of your dreams</h2>
    <p className='text-[#555555] text-[16px] text-center mb-5'>We provide our customers with the most incredible driving emotions. <br />That is why there are only world-class cars in our fleet</p>
    <div className='flex gap-3 justify-center mb-8'>
      <button className='w-[155px] p-3 `border-1` bg-gray-200 border-gray-500 rounded-3xl hover:bg-[#299764] duration-500 hover:text-white'>Compact</button>
      <button className='w-[155px] p-3 `border-1` bg-gray-200 border-gray-500 rounded-3xl hover:bg-[#299764] duration-500 hover:text-white'> Sports cars</button>
      <button className='w-[155px] p-3` `border-1` bg-gray-200 border-gray-500 rounded-3xl hover:bg-[#299764] duration-500 hover:text-white'> Vans</button>
    </div>
  </div>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10 '>
    {
        LINKS.map((item) => (
                <div key={item.id} className='w-[385px] rounded-2xl bg-gray-200 p-5 hover:bg-[#299764] hover:text-white transition-all duration-500 ease-in-out'>
                <p className='text-[24px] font-semibold'>{item.title}</p>
                <p className='text-[16px] text-gray-500'>{item.transmission}</p>
                <img className='py-2' src={item.image} alt="no image" />
                <div className='flex gap-25 mb-5'>
                <p className='text-[16px] flex items-center gap-1'><i class="fa-solid fa-user"></i>{item.seats}</p>
                <p className='text-[16px] flex items-center gap-1'><i class="fa-solid fa-globe"></i>{item.transmission}</p>
                </div>
                <div className='flex gap-25'>
                <p className='text-[16px] flex items-center gap-1'><i class="fa-solid fa-image-portrait"></i>{item.ageRequirement}</p>
                <p className='text-[16px] flex items-center gap-1'><i class="fa-solid fa-droplet"></i>{item.fuel}</p>
                </div>
                <p>{item.isAvailable}</p>
            </div>
        ))
    }
  </div>
  <div className='flex justify-center'><button className='w-[173px] bg-[#299764] p-3 duration-500 text-white rounded-3xl hover:bg-emerald-900'>View all cars</button></div>
</div>

  )
}

export default About