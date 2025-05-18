import React, { useState, useMemo } from 'react'
import Useref from './assets/My-folder/Useref'

import { countercontext } from './assets/context/context'
import Mcomp from '../Mcomp'
import { Outlet } from 'react-router'
import Nav from './assets/My-folder/Nav'
import Footer from './assets/My-folder/Footer'


function App() {
  const [count, setcount] = useState(0)
  const mystylemain = {
  backgroundImage: 'linear-gradient(to right, #093028, #237A57)',
  fontFamily:"arial",

};

  

  return (
    <>
    <div 
    style={mystylemain}
     className="overflow-x-hidden"
    
    >
<Nav />
    
    <Outlet/>

    <Footer />
    </div>
    
    {/* <countercontext.Provider value={count}>
      <div>
        <Mcomp />

        <p>Current number: {count}</p>
        <button onClick={() => setnum(count + 1)}>
          Click me, I'm on the main
        </button>
      </div>

          </countercontext.Provider> */}

    </>
  )
}

export default App
