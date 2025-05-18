import React from 'react'

function myref(){
    const inputref=Useref(null);

     const focusref=()=>{
        inputref.current.focus();

     };

}
function Useref() {
  return (
    <div>
        <input ref={inputref} type="text" />
        <button onClick={focusref} >click me</button>
      
    </div>
  )
}

export default Useref
