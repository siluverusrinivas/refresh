import React from 'react'

const Prop4 = ({func}) => {
  return (
    <div>
    <button onClick={()=>func()}>accept greet</button>
    </div>
  )
}

export default Prop4