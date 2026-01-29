import React, { useEffect, useState } from 'react'

const State2 = () => {
    // const[count,setCount]=useState(0)
    const [input,setInput]=useState('')
     const [input2,setInput2]=useState('')
    const [obj,setObj]=useState({
        name:'srinu',
        age:23
    })
    useEffect(()=>{
        // setCount(prev=>prev+1)
    },[])
  return (
    <div>
        {/* <h1>{count}</h1> */}
        <input type='text' value={input} placeholder='update the object' onChange={(e)=>setInput(e.target.value)}/>
          <input type='text' value={input2} placeholder='update the object' onChange={(e)=>setInput2(e.target.value)}/>
          <button onClick={()=>{
            setObj({...obj,name:input,age:input2})
             setInput('')
             setInput2('')

          }}>update name and age</button>
          <h1>{obj.name}</h1>
          <h1>{obj.age}</h1>
    </div>
  )
}

export default State2