import React from 'react'

const Prop2 = ({data}) => {
    // console.log(props.data)
    const {name,age}=data
    console.log({data})

  return (
    <div>
       <h1>{name}</h1> 
       <h5>{age}</h5>
        </div>
  )
}

export default Prop2