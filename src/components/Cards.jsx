import React from 'react';
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
function Cards({ name, image, id, price, type }) {
  return (
    <div className='w-[300px] h-[420px] bg-amber-50 p-4 shadow-lg rounded-lg hover:border-3 border-green-300'>
      <div className='w-full h-[60%] overflow-hidden rounded-lg'>
        <img src={image} alt="Card" className="w-full h-full object-cover" />
      </div>

      <div className='font-bold text-[20px] mt-2'>{name}</div>

      <div className='flex justify-between items-center mt-2'>
        <div className='text-lg font-bold text-green-500'>
          Rs: {price}
        </div>
        <div className='flex items-center gap-2 text-green-500 text-lg font-semibold'>
          {type==="veg"?<LuLeafyGreen/> :<GiChickenOven /> }
           <span>{type}</span>
        </div>
      </div>

      <button className='w-full p-2 rounded-lg bg-green-300 mt-3 hover:bg-green-400 transition-all text-gray-700'>
        Add to Cart
      </button>
    </div>
  );
}

export default Cards;
