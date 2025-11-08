import React from 'react'
import logo from '../companent/svg/logo.svg'

const Header = () => {
  return (
        <header className='py-3 sticky top-0 shadow-gray-500 bg-white shadow-sm mb-7 z-50'>
            <div className='max-w-[1200px] m-auto flex justify-between'>
                <div className='flex items-center gap-12'>
                    <img className='cursor-pointer' src={logo} alt="" />
                    <a className='text-[18px] hover:text-emerald-800' href="#">Categories</a>
                    <a className='text-[18px] hover:text-emerald-800' href="#">About Us</a>
                    <a className='text-[18px] hover:text-emerald-800' href="#">Help center</a>
                </div>
                <div className=' flex items-center gap-8'>
                    <a className='text-[18px] font-bold hover:text-blue-950' href="https://www.whatsapp.com/">+1 855 420 0000</a>
                    <a href="App.jsx"><button className='bg-[#F5F5F5] py-2 px-3 rounded-full '><i class="fa-solid fa-moon text-[#555555]"></i></button></a>
                    <button className='w-[142px] rounded-3xl bg-[#299764] text-white p-3 hover:bg-emerald-900'>Login<i class="fa-solid fa-right-to-bracket"></i></button>
                </div>
            </div>
        </header>
  )
}

export default Header