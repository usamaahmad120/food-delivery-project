import React from 'react'
import image1 from '../assets/image1.avif'
import { RiDeleteBin6Fill } from "react-icons/ri";

function Card2() {
  return (
    <div className='w-full h-[120px] shadow-lg flex justify-between'>
      <div className='w-[60%] h-full p-2 flex gap-5'>
        <div className='w-[50%] h-full overflow-hidden rounded-lg'>
          <img src={image1} alt="" />
        </div>
        <div className='w-[40%] h-full flex flex-col gap-5'>
          <div className='text-lg text-gray-600 font-semibold'>
            Pancakes
          </div>
          <div className='w-[110px] h-[50px] flex rounded-lg overflow-hidden shadow-lg border-2 border-green-400 text-green-400 font-bold'>
            <button className='w-[40px] h-full bg-white cursor-pointer flex justify-center items-center hover:bg-gray-200'> - </button>
            <span className='w-[40px] h-full bg-slate-300 flex justify-center items-center'>1</span>
            <button className='w-[40px] h-full bg-white cursor-pointer flex justify-center items-center hover:bg-gray-200'> + </button>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-start items-end gap-6 mr-2'>
        <span className='text-lg font-semibold text-green-400'>Rs : 499</span>
        <span className='text-lg font-bold text-red-400 text-[25px] cursor-pointer hover:text-gray-200'><RiDeleteBin6Fill /></span>
      </div>

    </div>
  )
}

export default Card2