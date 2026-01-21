import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  List } from 'react-window'

const Effect2 = () => {
  const [data,setData]=useState([])
  const [error,setError]=useState()
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    async function fetchData(){
      try{
        const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
        setData(res.data)
      }
      catch(err){
        setError(err.message)
      }
      finally{
        setLoading(false)
      }
    }
    fetchData()
  },[])

  if (loading) return <h1>loading...</h1>
  if (error) return <h1>Error:{error}</h1>

  // Virtual row renderer
  const Row = ({ index, style }) => {
    const post = data[index];
    return (
      <div style={{ ...style, display: "flex", borderBottom: "1px solid #ccc" }}>
        <div style={{ width: "50px" }}>{post.id}</div>
        <div style={{ flex: 1 }}>{post.title}</div>
        <div style={{ flex: 1 }}>{post.body}</div>
      </div>
    );
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Static Table Header */}
      <div style={{ display: "flex", fontWeight: "bold" }}>
        <div style={{ width: "50px" }}>ID</div>
        <div style={{ flex: 1 }}>Title</div>
        <div style={{ flex: 1 }}>Body</div>
      </div>

      {/* Virtualized list body */}
      <List
        height={400}
        itemCount={data.length}
        itemSize={50}
        width="100%"
      >
        {Row}
      </List>
    </div>
  )
}

export default Effect2
