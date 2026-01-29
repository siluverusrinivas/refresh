import React, { useState } from 'react'
import Prop2 from './Prop2'
import Prop3 from './Prop3'
import Prop4 from './Prop4'
import Prop5 from './Prop5'


    const obj={
      name:'srinivas',
      age:23
    }
const Prop1 = () => {
  const[state,setState]=useState(obj)
    const List=[
        'a','b','c'
    ]

    function greet()
    {
      console.log('good morning')
    }

    const handleUpdate=(callback)=>{
      setState(callback)
    }
  return (
    <div>
        <h1>prop1 component</h1>
        <h1 className='box'>{state.name}</h1>
        <h1>{state.age}</h1>
        <Prop2 data={List} obj={obj}/>
        <Prop3  obj={obj}/>
        <Prop4 func={greet}/>
        <Prop5 call={handleUpdate}/>
    </div>
  )
}

export default Prop1