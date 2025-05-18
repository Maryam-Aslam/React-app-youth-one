import React, { useEffect, useState } from 'react'

function File3(props) {
    const [num ,setnum]=useState(1)
    useEffect(()=>{
        alert("im main without any dependency")
    })
    useEffect(()=>{
        alert("im main with empty dependency")
    },[])
    useEffect(()=>{
        
        alert("im main with using dependency  having count or initial state value")
    },[num])
  return (
    <div>
      <button onClick={()=>setnum(num+1)}>click me:{props.change}</button>
    </div>
  )
}

export default File3

