import React from 'react'
import { Link } from 'react-router'
import MY from './MY.jpg';

function Nav() {


  return (
     <div
      // className="bg-cover bg-center h-auto w-auto"
      // style={{ backgroundImage: `url(${MY})` }}
    >
      <h1 className='font-bold  text-center text-7xl text-amber-50 w-auto h-auto  pt-6 pl-6 ' >ONE YOUTH</h1>
      <div 
       className=" font-semibold justify-center  text-2xl text-amber-50 gap-16 flex  pl-6 " >
        <span >United</span>
      <span>Powerful</span>
        <span >Unstoppable</span>

      </div>
      <div  className=" border-4 font-semibold  shadow-lg shadow-black text-2xl text-green-950 gap-16 flex justify-center  p-5 mt-4 rounded-full  bg-amber-50  w-4xl m-auto
      ">
        <Link to="/home"><span >HOME</span></Link>
          <Link to="/Mission"><span >MISSION</span></Link>
           <Link to="/Vision"><span >VISION</span></Link>
         <Link to="/Joinus"><span >JOIN US</span></Link>

      </div>
    </div>
  )
}


export default Nav
