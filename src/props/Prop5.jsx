import React, { useState } from 'react'

const Prop5 = ({call}) => {
    const [name,setname]=useState('')
  return (
    <div>
     <input type='text' placeholder='enter any name' value={name} onChange={(e)=>setname(e.target.value)}/>
     <button onClick={()=>call((prev)=>({...prev,name}))}>share updated name</button>
    </div>
  )
}

export default Prop5