import { useMemo, useState } from "react"





const Memo1=()=>{
  const[input,setInput]=useState("")
 const [num, setNum] = useState(null);
    const factorial=useMemo(()=>{
        console.log("caluclating started again")
        if(num == null) return null
        let mul=1
        for(let i=1;i<=num;i++)
        {
            mul*=i
        }
        return mul
    },[num])
    return (
        <>
        <input type="number" value={input} onChange={(e)=>setInput(e.target.value)}/>

        <h1>factorial:{factorial}</h1>
        <button onClick={()=>setNum(Number(input))}>find </button>
        </>
    )
}

export default Memo1;