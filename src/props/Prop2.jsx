import React from 'react'

const Prop2 = ({data,obj}) => {
  // const Prop2 = ({data,obj}) => {
  // const Prop2 = (props) => {
  // const Prop2 = (props,{data}) => {  this is not corrrect the data will get undefined because it only accept one parameter
    console.log({data,obj})
    const list=data
    const {name,age}=obj
  return (
    <div>
     
        {list.map((res,index)=>(
            <div key={index}>
                {res}
                </div>
        ))}
        {name}
        {age}
    </div>
  )
}

export default Prop2