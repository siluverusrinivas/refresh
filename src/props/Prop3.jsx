import React from 'react'

const Prop3 = ({obj}) => {
  console.log({obj})
  const {name,age}=obj
  return (
    <div>
      <h1>Name:{name} , Age:{age}</h1>
    </div>
  )
}

export default Prop3