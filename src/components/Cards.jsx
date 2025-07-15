import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../feature/CartSlice";
import { toast } from "react-toastify";

function Cards({ name, image, id, price, type }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    // Check if item is already in cart
    const alreadyAdded = cartItems.find((item) => item.id === id);

    if (alreadyAdded) {
      toast.warning(" Already in cart!");
    } else {
      dispatch(
        addToCart({
          id,
          name,
          image,
          price,
          type,
        })
      );
      toast.success(" Added to cart!");
    }
  };

  return (
    <div className="w-[300px] h-[420px] bg-amber-50 p-4 shadow-lg rounded-lg hover:border-3 border-green-300">
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="Card" className="w-full h-full object-cover" />
      </div>

      <div className="font-bold text-[20px] mt-2">{name}</div>

      <div className="flex justify-between items-center mt-2">
        <div className="text-lg font-bold text-orange-500">Rs: {price}</div>
        <div className="flex items-center gap-2 text-orange-500 text-lg font-semibold">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>

      <button
        className="w-full p-2 rounded-lg bg-orange-300 mt-3 hover:bg-orange-400 transition-all text-gray-700"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Cards;
