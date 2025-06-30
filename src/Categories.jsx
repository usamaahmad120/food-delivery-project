import React from "react";
import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { TbSoupOff } from "react-icons/tb";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
const  Categories =[
  {
    id : 1,
    name : "All",
    icone: <TiThSmallOutline className="w-[60px] h-[60px] text-orange-500"/>
  },
  {
    id : 2,
    name : "Breakfast",
    icone: <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-orange-500" />
  },
  {
    id : 3,
    name : "Soup",
    icone: <LuSoup  className="w-[60px] h-[60px] text-orange-500"/>
  },
  {
    id : 4,
    name : "Pasta",
    icone: <TbSoupOff className="w-[60px] h-[60px] text-orange-500" />
  },
  {
    id : 5,
    name : "Main_course",
    icone: <MdOutlineFoodBank className="w-[60px] h-[60px] text-orange-500"/>
  },
  {
    id : 6,
    name : "Pizza",
    icone: <GiFullPizza className="w-[60px] h-[60px] text-orange-500"/>
  },
  {
    id : 7,
    name : "Burger",
    icone: <GiHamburger  className="w-[60px] h-[60px] text-orange-500"/>
  },
]
export default Categories;