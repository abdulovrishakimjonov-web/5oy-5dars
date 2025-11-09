import React, { useState } from 'react'
import logo from '../companent/svg/logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='py-3 sticky top-0 shadow-gray-500 bg-white shadow-sm mb-7 z-50'>
      <div className='max-w-[1200px] m-auto px-4 flex justify-between items-center'>
        <div className='flex items-center'>
          <img className='cursor-pointer' src={logo} alt="" />
        </div>

        <div className='hidden lg:flex items-center gap-12'>
          <a className='text-[18px] hover:text-emerald-800' href="#">Categories</a>
          <a className='text-[18px] hover:text-emerald-800' href="#">About Us</a>
          <a className='text-[18px] hover:text-emerald-800' href="#">Help center</a>
        </div>

        <div className='hidden lg:flex items-center gap-8'>
          <a className='text-[18px] font-bold hover:text-blue-950' href="https://www.whatsapp.com/">+1 855 420 0000</a>
          <a href="App.jsx">
            <button className='bg-[#F5F5F5] py-2 px-3 rounded-full cursor-pointer'>
              <i className="fa-solid fa-moon text-[#555555]"></i>
            </button>
          </a>
          <button className='w-[142px] cursor-pointer rounded-3xl bg-[#299764] text-white p-3 hover:bg-emerald-900'>
            Login<i className="fa-solid fa-right-to-bracket ml-2"></i>
          </button>
        </div>

        <button 
          className='lg:hidden p-2 text-2xl'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </button>
      </div>

      {isMenuOpen && (
        <div className='lg:hidden bg-white border-t border-gray-200 px-4 py-4'>
          <div className='flex flex-col gap-4'>
            <a className='text-[18px] hover:text-emerald-800 py-2' href="#">Categories</a>
            <a className='text-[18px] hover:text-emerald-800 py-2' href="#">About Us</a>
            <a className='text-[18px] hover:text-emerald-800 py-2' href="#">Help center</a>
            <a className='text-[18px] font-bold hover:text-blue-950 py-2' href="https://www.whatsapp.com/">+1 855 420 0000</a>
            <div className='flex items-center gap-4 pt-2'>
              <a href="App.jsx">
                <button className='bg-[#F5F5F5] py-2 px-3 rounded-full cursor-pointer'>
                  <i className="fa-solid fa-moon text-[#555555]"></i>
                </button>
              </a>
              <button className='flex-1 cursor-pointer rounded-3xl bg-[#299764] text-white p-3 hover:bg-emerald-900'>
                Login<i className="fa-solid fa-right-to-bracket ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header