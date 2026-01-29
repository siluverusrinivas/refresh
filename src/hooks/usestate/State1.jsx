import React, { useState } from 'react'
import State2 from './State2'

const State1 = () => {
    const[count,setCount]=useState(0)
    const handleIncrement=()=>{
        setTimeout(()=>{
            setCount(prev=>prev+1)
        },500)
    }
     const handleDecrement=()=>{
        setTimeout(()=>{
            
            setCount(prev=>prev > 0? prev-1:0)
            
        },500)
    }
      const handleReset=()=>{
        setTimeout(()=>{
            setCount(0)
        },500)
    }
  return (
    <div>
        <h1>useState hook</h1>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <State2/>
    </div>
  )
}

export default State1