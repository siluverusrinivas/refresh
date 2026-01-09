import React, { useState } from 'react'

const State1 = () => {
    const[count,setCount]=useState(0)
     const[num,setNum]=useState("")
     const[hide,setHide]=useState(true)
     const [arr,setArr]=useState([])
       const [arrayInput, setArrayInput] = useState("");
     const [obj,setObj]=useState({
        name:'srinivas',
        age:23
     })
     const[obj1,setObj1]=useState("")

     const objhandle=(e)=>{
       setObj1(e.target.value)
     }

     const handleOnchange=()=>{
        setObj(prev=>({...prev,name:obj1}))
        setObj1('')
     }

    const Increment=()=>{
        console.log('button clicked for increment')
        setCount(prev=>prev+1)
      
    }

      const Decrement=()=>{
        console.log('button clicked for decrement')
       
        setCount(prev=>(prev>0?prev-1:prev))
    }

    const Reset=()=>{
        setCount(0)
    }


    const onChange=(e)=>{
       setNum(Number(e.target.value))
    }

    const handleHide=()=>{
        setHide(prev=>!prev)
    }

    
  const handleArrayChange = (e) => {
    setArrayInput(e.target.value);
  };
       const handlePush = () => {
  if (arrayInput.trim() === "") return;
  setArr(prev => [...prev, Number(arrayInput)]);
  setArrayInput(""); 
};


  return (
    <div>
        <input type='text' value={num} onChange={onChange} placeholder='enter any number'/>
        <h2>{num}</h2>
  <h1>{count}</h1>
<button onClick={Increment}>increment</button>
<button onClick={Decrement}>decrement</button>
<button onClick={Reset}>reset</button>

 {hide && <h1>this is testing the hiding</h1>} 

   <button onClick={handleHide}>
        {hide ? "hide" : "show"}
      </button>


      <input type='text' 
        value={arrayInput}
        onChange={handleArrayChange}
        onBlur={handlePush}
        placeholder='add number to array'/>
        <button onClick={handlePush}>Push</button>

      {arr.map((arr,index)=>{
        return(
            <ul key={index}>
                <li>{arr}</li>
            </ul>
        )
      })}


      <input
  type="text"
  value={obj1}
  onChange={objhandle}
  placeholder="change name"
/>
<button onClick={handleOnchange}>update name</button>
<h2>{obj.name}</h2>
<h3>{obj.age}</h3>

    </div>
  )
}

export default State1