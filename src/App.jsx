import React from 'react'
import vite from '../public/vite.svg'
import { LINKS } from './static/min'

const App = () => {


  return (
    <div>
    <div className='max-w-[1200px] m-auto p-4 flex justify-between items-center'>
      <div><img src={vite} alt="" /></div>
      <div>
        <ul className='flex gap-15'>
          <li className='text-emerald-800 font-black not-last:hover:bg-blue-100'>Home</li>
          <li className='text-emerald-800 font-black not-last:hover:bg-blue-100'>Contact</li>
          <li className='text-emerald-800 font-black not-last:hover:bg-blue-100'>Projekt</li>
          <li className='text-emerald-800 font-black not-last:hover:bg-blue-100'>mup</li>
        </ul>
      </div>
      <div><button className='w-[150px] bg-indigo-800 text-white font-bold p-2 rounded-md hover:bg-indigo-950'>sing</button></div>LINKS
      
    </div>
    <div>

      
    </div>
</div>


  )
}

export default App