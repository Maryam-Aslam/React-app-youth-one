import React,{useContext} from 'react'
import { countercontext } from './src/assets/context/context'

function Mcomp() {

    const counter=useContext(countercontext)
  return (
    <div>
      {counter}
    </div>
  )
}

export default Mcomp

