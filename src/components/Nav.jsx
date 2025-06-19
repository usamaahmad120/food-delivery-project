import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";

function Nav() {
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-9 md:px-5 '>
      <div className='w-[60px] h-[60px] bg-amber-50 flex justify-center items-center rounded-b-md shadow-2xl  '>
      <MdFastfood  className='w-[30px] h-[30px] text-green-500'/>
      </div>
      <form className='w-[50%] h-[60px] bg-amber-50 flex items-center px-5 gap-5 shadow-2xl rounded-b-md md:w-[70%]' >
    <IoSearch className='w-[20px] h-[20px] text-green-500'/>
    <input type="text"  placeholder='search items' className='w-[100%] outline-none text-[20px]'/>
      </form>
      <div className='w-[60px] h-[60px] bg-amber-50 flex justify-center items-center rounded-b-md 
      shadow-2xl relative'>
        <span className='absolute top-0 right-2 font-bold text-green-500 text-[18px]'>0</span>
      <FaCartPlus className='w-[30px] h-[30px] text-green-500'/>
      </div>
      
    </div>
  )
}

export default Nav