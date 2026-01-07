import React, { useState } from 'react'

const State1 = () => {
    const[count,setCount]=useState(0)

    const Increment=()=>{
        console.log('button clicked for increment')
        setCount(prev=>prev+1)
        setCount(prev=>prev+1)
    }

      const Decrement=()=>{
        console.log('button clicked for decrement')
       
        setCount(prev=>{            
            if(prev>0)
            {
                return prev-1
            }
       return prev
      })
    }

    const Reset=()=>{
        setCount(0)
    }
  return (
    <div>
  <h1>{count}</h1>
<button onClick={Increment}>increment</button>
<button onClick={Decrement}>decrement</button>
<button onClick={Reset}>reset</button>
    </div>
  )
}

export default State1