import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { addToCart, } from '../feature/CartSlice'; 

function Card2() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className='w-full space-y-4 p-3'>
      {cartItems.length === 0 ? (
        <p className='text-center text-gray-400'>Cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className='w-full h-[120px] shadow-lg flex justify-between'>
            {/* Left: Image and name */}
            <div className='w-[60%] h-full p-2 flex gap-5'>
              <div className='w-[50%] h-full overflow-hidden rounded-lg'>
                <img src={item.image} alt={item.name} className='w-full h-full object-cover' />
              </div>
              <div className='w-[40%] h-full flex flex-col gap-5'>
                <div className='text-lg text-gray-600 font-semibold'>
                  {item.name}
                </div>

                {/* Quantity control */}
                <div className='w-[110px] h-[50px] flex rounded-lg overflow-hidden shadow-lg border-2 border-orange-400 text-orange-400 font-bold'>
                  <button
                    className='w-[40px] h-full bg-white cursor-pointer flex justify-center items-center hover:bg-orange-200'
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </button>
                  <span className='w-[40px] h-full bg-slate-300 flex justify-center items-center'>
                    {item.quantity}
                  </span>
                  <button
                    className='w-[40px] h-full bg-white cursor-pointer flex justify-center items-center hover:bg-orange-200'
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Price and delete */}
            <div className='flex flex-col justify-start items-end gap-6 mr-2'>
              <span className='text-lg font-semibold text-orange-400'>
                Rs : {item.price * item.quantity}
              </span>
              <span
                className='text-lg font-bold text-red-400 text-[25px] cursor-pointer hover:text-gray-200'
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                <RiDeleteBin6Fill />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Card2;
