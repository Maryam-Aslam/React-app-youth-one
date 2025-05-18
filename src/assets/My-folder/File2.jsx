import React from 'react'

function File2() {
 const submithandler=(e)=>{
    e.preventDefault()
    console.log("submitted done")
 }
  return (
    <div>
        <form onSubmit={(e)=>{
            submithandler(e)
        }}>
            <input type="text"  placeholder='enter ur name'/>
            <button>post it</button>
        </form>
      
    </div>
  )
}

export default File2
