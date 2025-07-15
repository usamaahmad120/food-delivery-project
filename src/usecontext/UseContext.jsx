import React, { createContext, useContext, useState} from 'react'
import { food_items } from '../food';
export const dataContext = createContext()
function UseContext({children}) {
  const [input, setInput] = useState("");
  const [cate, setCate] = useState([food_items]);
  const [showCart, setShowCart] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false);

  let data ={
    input, 
    setInput,
    cate,
    setCate,
    showCart,
    setShowCart,
    showLoginForm, 
    setShowLoginForm
  }
  return (
    <div>
      <dataContext.Provider value={data}>
        {children}
      </dataContext.Provider>
      
    </div>
  )
}

export default UseContext