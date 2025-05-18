import React from 'react'
import { useState } from 'react'

const First = () => {

   const[num,setnum]=useState(0)
    

  return (
 <div style={{margin:"40px",backgroundColor:"black", padding:"100px", alignItems:"center",height:"100%", borderRadius:"20px"}}>
   
    <h1 style={{width:"400px",height:"400px",borderRadius:"50%",backgroundColor:"red",color:"white",textAlign:"center", paddingTop:"170px", boxSizing:"border-box", margin:"auto"}}>{num}</h1>
    <div style={{margin:"auto"}}></div>
    <button onClick={()=>setnum(num+1)} style={{backgroundColor:"white", width:"300px" , padding:"20px",fontSize:"15px"}}>INCREMENT</button>
    <button onClick={()=>setnum(num-1)} style={{backgroundColor:"white", width:"300px" , padding:"20px",fontSize:"15px" , margin:"20px"}}>DECREMENT</button>
    <button onClick={()=>setnum(num*0)} style={{backgroundColor:"white", width:"300px" , padding:"20px",fontSize:"15px"}}>RESET</button>

 </div>
  )
}

export default First
