import React, { useState } from 'react'

function Form() {
    const [user,setuser]=useState("")
     const submithandler=(e)=>{
     e.preventDefault()

        console.log(user)
        setuser("")
     }
    
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>
        <input id='myinput'
        value={user}
        onChange={(e)=>{
            setuser(e.target.value)
        }} 
        style={{}}
        type="text" placeholder='write your name' />
        <button>post it</button>
      </form>
    </div>
  )
}

export default Form
