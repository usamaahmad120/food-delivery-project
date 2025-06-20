import React, { useState } from "react";
import Nav from "../components/Nav";
import Categories from "../Categories";
import Cards from "../components/Cards";
import { food_items } from "../food";

function Home() {
  const [cate, setCate] = useState(food_items);

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


  return (
    <>
      <div className="bg-slate-200 w-full min-h-screen">
        <Nav />

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-5 w-full mb-5">
          {Categories.map((items, index) => (
            <div
              key={index}
              className="bg-amber-50 w-[140px] h-[140px] flex flex-col gap-5 p-5 justify-start font-semibold text-[20px] shadow-2xl text-gray-600 rounded-lg hover:bg-green-200 cursor-pointer transition-all duration-200"
              onClick={() => filterCategory(items.name)}
            >
              {items.icone}
              {items.name}
            </div>
          ))}
        </div>

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
        </div>
      </div>
    </>
  );
}

export default Home;
