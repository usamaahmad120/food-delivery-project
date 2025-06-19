import React from 'react'
import Nav from '../components/Nav'
import Categories from '../Categories'
import Cards from '../components/Cards'

function Home() {
  return (
    <>
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav/>
      <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
        {Categories.map((items)=>{

          return <div className='bg-amber-50 w-[140px] h-[140px] flex flex-col gap-5 p-5 justify-start font-semibold text-[20px] shadow-2xl text-gray-600 rounded-lg hover:bg-green-200 cursor-pointer transition-all duration-200'>
            {items.icone}
            {items.name}
          </div>
        })}
      </div>
        <Cards/>

    </div>
    
    </>
  )
}

export default Home