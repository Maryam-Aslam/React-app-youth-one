import React, { useState } from 'react'

function Formprac() {
  const[typename,settypename]=useState("")
    const[typeclass,settypeclass]=useState("")
  const[typemail,settypemail]=useState("")

  const submithandler=(e)=>{
    e.preventDefault()

    const formdata={
      typename,typeclass,typemail
    };
     
    console.log(formdata)
    settypename("")
    settypemail("")
    settypeclass("")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>
        <label htmlFor="">Name</label>
        <input className='myinput'
        value={typename}
        onChange={(e)=>{
          settypename(e.target.value)
        }}
         type="text" placeholder='Enter your Name' / >

          <label htmlFor="">Class</label>
        <input className='myinput'
        value={typeclass}
        onChange={(e)=>{
          settypeclass(e.target.value)
        }}
         type="text" placeholder='Enter your Name' / >

          <label htmlFor="">Email</label>
        <input  className='myinput'
        value={typemail}
        onChange={(e)=>{
          settypemail(e.target.value)
        }}
         type="text" placeholder='Enter your Name' / >

          <button>upload</button>
      </form>
      
    </div>
  )
}

export default Formprac
