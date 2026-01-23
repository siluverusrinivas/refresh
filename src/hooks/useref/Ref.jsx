import { useEffect, useRef, useState } from "react"




const Ref1=()=>{
    const [count,setCount]=useState(0)
    const prevCount=useRef(0)
    const inputRef=useRef(null)

    useEffect(()=>{
         prevCount.current=count
    },[count])

    const handleFocus=()=>{
        inputRef.current.focus()
    }
    return(
        <>
        <h1>{count}</h1>
        <h1>{prevCount.current}</h1>
        <input ref={inputRef}  placeholder="enter any value"/>
        <button onClick={handleFocus}>focus</button>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
        </>
    )
}


export default Ref1