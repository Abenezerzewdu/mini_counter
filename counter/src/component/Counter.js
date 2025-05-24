import React from 'react'
import { useState } from 'react'
function Counter() {
const [count,setCount]=useState(0);
const [step,setStep]=useState(1);

  return (
    <div>Counter</div>
  )
}

export default Counter