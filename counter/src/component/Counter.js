import React from 'react'
import { useState } from 'react'
import '../component/counter.css'
function Counter() {
const [count,setCount]=useState(0);
const [step,setStep]=useState(1);

function handleAddition(){
    parseInt(step);
 setCount(count+step);
 
}
function handleSubtraction(){
    if(count===0)return;
    setCount(count-step);

}
const handleReset=()=>{
    setCount(0);
    setStep(1)
}
  return (
    <>
  <div className='app_container'>
    <div className='container'>
    <div id='count'>Count : {count}</div>
   <span className='step'>
   Step : <input id='input' value={step} onChange={(e)=>setStep(Number(e.target.value))}></input>
    </span> 
    </div>
    <div>
        <button onClick={handleAddition}> + </button> 
        <button onClick={handleSubtraction}>-</button> </div>
    <div>
        <button onClick={handleReset}>Reset</button>
    </div>
 </div>
    </>
     
  )
}

export default Counter