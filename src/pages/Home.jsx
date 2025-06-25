import React, { useContext, useEffect } from "react";
import Nav from "../components/Nav";
import Categories from "../Categories";
import Cards from "../components/Cards";
import { food_items } from "../food";
import { dataContext } from "../usecontext/UseContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";

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
        (item) =>
          item.food_category.toLowerCase() === Category.toLowerCase()
      );
      setCate(filtered);
    }
  }

  return (
    <>
      <div className="bg-slate-200 w-full min-h-screen">
        <Nav />
          {!input?<div className="flex flex-wrap justify-center items-center gap-5 w-full mb-5">
          {Categories.map((items, index) => (
            <div
              key={items.name} 
              className="bg-amber-50 w-[140px] h-[140px] flex flex-col gap-5 p-5 justify-start font-semibold text-[20px] shadow-2xl text-gray-600 rounded-lg hover:bg-green-200 cursor-pointer transition-all duration-200"
              onClick={() => filterCategory(items.name)}
            >
              {items.icone}
              {items.name}
            </div>
          ))}
        </div>: null}
        
        

        {/* Cards */}
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
        <div className={` w-full md:w-[40vw] h-[100%] bg-white top-0 right-0 fixed shadow-xl transition-all duration-700 ${showCart?"translate-0" : "translate-x-full"}`}>
        <header className="w-[100%] flex justify-between p-6">
          <span className="font-semibold text-[18px] text-green-400">Food Items</span>
          <span className="w-[30px] h-[30px] text-green-400 text-[20px] font-semibold cursor-pointer hover:text-gray-600" onClick={()=> setShowCart(false)}><RxCross2 /></span>
        </header>
        <Card2/>
      </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;
