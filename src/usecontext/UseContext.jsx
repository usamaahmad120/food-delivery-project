import React, { createContext, useState } from "react";
import { food_items } from "../food";

export const dataContext = createContext();

function UseContext({ children }) {
  const [input, setInput] = useState("");
  const [cate, setCate] = useState(food_items);

  const [showCart, setShowCart] = useState(false);

  // ✅ Single modal state for both login & register
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [authFormType, setAuthFormType] = useState("login"); 
  // can be "login" or "register"

  let data = {
    input,
    setInput,
    cate,
    setCate,
    showCart,
    setShowCart,

    // ✅ Auth form states
    showAuthForm,
    setShowAuthForm,
    authFormType,
    setAuthFormType,
  };

  return (
    <dataContext.Provider value={data}>{children}</dataContext.Provider>
  );
}

export default UseContext;
