import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { dataContext } from "../usecontext/UseContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

function Nav() {
  const { input, setInput, setCate, setShowCart, setShowLoginForm  } = useContext(dataContext);

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const filteredItems = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(filteredItems);
  }, [input]);

  return (
    <div className="w-full h-[100px] flex justify-between items-center px-3 md:px-5 lg:px-10">
      {/* LEFT: Logo */}
      <div className="flex items-center gap-3">
        <div className="w-[60px] h-[60px] bg-amber-50 flex justify-center items-center rounded-b-md shadow-2xl">
          <MdFastfood className="w-[30px] h-[30px] text-orange-500" />
        </div>
      </div>

      {/* CENTER: Search Bar */}
      <form
        className="flex-1 max-w-[800px] h-[60px] mx-5 bg-amber-50 flex items-center px-5 gap-5 shadow-2xl rounded-b-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="w-[20px] h-[20px] text-orange-500" />
        <input
          type="text"
          placeholder="search items"
          className="w-full outline-none text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      {/* RIGHT: Login + Cart */}
      <div className="flex items-center gap-4">
        {/* Login Button (small & aligned) */}
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow"
          onClick={() => setShowLoginForm(true)}
        >
          Login
        </button>

        {/* Cart Icon */}
        <div
          className="w-[60px] h-[60px] bg-amber-50 flex justify-center items-center rounded-b-md shadow-2xl relative cursor-pointer"
          onClick={() => setShowCart(true)}
        >
          <span className="absolute top-0 right-2 font-bold text-orange-500 text-[18px]">
            {totalQuantity}
          </span>
          <FaCartPlus className="w-[30px] h-[30px] text-orange-500" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
