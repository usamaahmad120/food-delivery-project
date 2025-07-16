import React, { useContext, useEffect, useState } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { dataContext } from "../usecontext/UseContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Nav() {
  const {
    input,
    setInput,
    setCate,
    setShowCart,
    setShowAuthForm,
    setAuthFormType,
  } = useContext(dataContext);

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")) || null
  );

  // Search filter
  useEffect(() => {
    const filteredItems = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(filteredItems);
  }, [input]);

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    setLoggedUser(null);
    toast.success("Logged out successfully!");
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const user = JSON.parse(localStorage.getItem("loggedUser"));
      setLoggedUser(user);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:px-5 lg:px-10 gap-3 sm:gap-0">
      {/* LEFT: Logo */}
      <div className="flex items-center justify-center sm:justify-start gap-2">
        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] bg-amber-50 flex justify-center items-center rounded-md shadow">
          <MdFastfood className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] text-orange-500" />
        </div>
        <span className="text-orange-500 font-bold text-lg sm:text-xl">
          Food Express
        </span>
      </div>

      {/* CENTER: Search Bar */}
      <form
        className="w-full sm:flex-1 h-[40px] sm:h-[50px]  sm:max-w-[500px] lg:max-w-[600px] bg-amber-50 flex items-center px-3 gap-3 shadow rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="w-[18px] h-[18px] text-orange-500" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none text-[14px] sm:text-[16px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      {/* RIGHT: Auth + Cart */}
      <div className="flex justify-between sm:justify-end items-center gap-3">
        {loggedUser ? (
          <>
            <span className="text-sm sm:text-base font-semibold text-orange-500 truncate max-w-[80px]">
              Hi, {loggedUser.name}
            </span>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base"
            onClick={() => {
              setAuthFormType("login");
              setShowAuthForm(true);
            }}
          >
            Login
          </button>
        )}

        {/* Cart Icon */}
        <div
          className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] bg-amber-50 flex justify-center items-center rounded-md shadow relative cursor-pointer"
          onClick={() => setShowCart(true)}
        >
          <span className="absolute top-[-4px] right-0 font-bold text-orange-500 text-sm">
            {totalQuantity}
          </span>
          <FaCartPlus className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] text-orange-500" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
