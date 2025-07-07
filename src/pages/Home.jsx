import React, { useContext, useEffect } from "react";
import Nav from "../components/Nav";
import Categories from "../Categories";
import Cards from "../components/Cards";
import { food_items } from "../food";
import { dataContext } from "../usecontext/UseContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";

function Home() {
  const { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);
  

  useEffect(() => {
    setCate(food_items);
  }, []);

  function filterCategory(Category) {
    if (Category === "All") {
      setCate(food_items);
    } else {
      const filtered = food_items.filter(
        (item) => item.food_category.toLowerCase() === Category.toLowerCase()
      );
      setCate(filtered);
    }
  }

  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deleveryFee = 150;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + deleveryFee + tax;

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />

      {/* Categories */}
      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full mb-5">
          {Categories.map((items) => (
            <div
              key={items.name}
              className="bg-amber-50 w-[140px] h-[140px] flex flex-col gap-5 p-5 justify-center items-center text-center font-semibold text-[20px] shadow-2xl text-gray-600 rounded-lg hover:bg-orange-200 cursor-pointer transition-all duration-200"
              onClick={() => filterCategory(items.name)}
            >
              {items.icone}
              {items.name}
            </div>
          ))}
        </div>
      )}

      {/* Food Cards */}
      <div className="flex flex-wrap gap-5 justify-center pb-8 pt-5">
        {cate.map((item) => (
          <Cards
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>

      {/* Cart Sidebar */}
      <div
        className={`w-full md:w-[40vw] h-screen fixed top-0 right-0 bg-white shadow-xl transition-all duration-700 flex flex-col z-50 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <header className="w-full flex justify-between p-6 border-b border-gray-200">
          <span className="font-semibold text-[18px] text-orange-500">
            Food Items
          </span>
          <span
            onClick={() => setShowCart(false)}
            className="text-[20px] cursor-pointer text-orange-500 hover:text-gray-600"
          >
            <RxCross2 />
          </span>
        </header>

        {/* Scrollable Cart Content */}
        <div className="flex-1 overflow-y-auto px-4">
          <Card2 />
        </div>

        {/* Total Section */}
        <div className="border-t border-gray-300 px-4 py-2 bg-white space-y-2">
          <div className="flex justify-between">
            <span className="text-base font-medium text-orange-300">Subtotal</span>
            <span className="text-base font-semibold text-orange-500">Rs {subtotal}/-</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base font-medium text-orange-300">Delivery Fee</span>
            <span className="text-base font-semibold text-orange-500">Rs {deleveryFee}/-</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base font-medium text-orange-300">Tax (10%)</span>
            <span className="text-base font-semibold text-orange-500">Rs {tax}/-</span>
          </div>
          <div className="border-t border-gray-300 my-1" />
          <div className="flex justify-between">
            <span className="text-lg font-bold text-orange-400">Total</span>
            <span className="text-lg font-bold text-orange-600">Rs {total}/-</span>
          </div>
        </div>
        <div className="px-4 pb-4">
  <button
    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
    onClick={() => alert("Proceeding to checkout...")}
  >
    Checkout
  </button>
</div>
      </div>
      
    </div>
  );
}

export default Home;
