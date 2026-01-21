import React, { useState } from 'react'
import Prop2 from './Prop2'
import Prop3 from './Prop3'

const Prop1 = () => {
    const[state,setState]=useState({
        name:'srinivas',
        age:24
    })
   console.log('prop1 called')

    function ab(newName){
        setState(prev=>({...prev,name:newName}))
    }
   
    // const data={
    //     name:'srinivas',
    //     age:24
    // }
  return (
    <div>
        {state}
        {state.age}
        {/* <Prop2 data={data}/> */}
        <Prop3  data={state} func={ab}/>
    </div>
  )
}

export default Prop1