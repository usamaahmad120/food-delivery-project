import React, { useContext, useEffect } from 'react';
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { dataContext } from '../usecontext/UseContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux'; // ✅ Redux hook

function Nav() {
  const { input, setInput, setCate, showCart, setShowCart } = useContext(dataContext);

  // ✅ Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // ✅ Calculate total quantity
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const filteredItems = food_items.filter(item =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(filteredItems); 
  }, [input]);

  return (
    <div className='w-full h-[100px] flex justify-between items-center px-9 md:px-5'>
      {/* Logo */}
      <div className='w-[60px] h-[60px] bg-amber-50 flex justify-center items-center rounded-b-md shadow-2xl'>
        <MdFastfood className='w-[30px] h-[30px] text-orange-500' />
      </div>

      {/* Search */}
      <form
        className='w-[50%] h-[60px] bg-amber-50 flex items-center px-5 gap-5 shadow-2xl rounded-b-md md:w-[70%]'
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className='w-[20px] h-[20px] text-orange-500' />
        <input
          type="text"
          placeholder='search items'
          className='w-full outline-none text-[20px]'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      {/* Cart */}
      <div
        className='w-[60px] h-[60px] bg-amber-50 flex justify-center items-center rounded-b-md shadow-2xl relative cursor-pointer'
        onClick={() => setShowCart(true)}
      >
        <span className='absolute top-0 right-2 font-bold text-orange-500 text-[18px]'>
          {totalQuantity}
        </span>
        <FaCartPlus className='w-[30px] h-[30px] text-orange-500' />
      </div>
    </div>
  );
}

export default Nav;
