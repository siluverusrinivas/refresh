import React, { useEffect, useState } from 'react'

const Effect1 = () => {
    const[data,setData]=useState([])
    const[error,setError]=useState()
    const[loading,setLoading]=useState(true)

    const [currentPage,setCurrentPage]=useState(1)
    const postsPerPage=10
    useEffect(()=>{

        const fetchData=async()=>{
         
         try{
            const res=await fetch('https://jsonplaceholder.typicode.com/posts')
            console.log(res)
            if(!res.ok)
            {
                throw new Error(`HTTP error ${res.status}`)
            }
            const data=await res.json()
            console.log({data})
            setData(data)
         }
        
         catch(err)
         {
            console.log('error handled',err.message)
            setError(err)
            setLoading(false)
         }
         finally{
            setLoading(false)
         }
        }
    

     fetchData()

    },[])

    if (loading) return <h3>loading....</h3>;
    if(error)  return  <h3>Error :{error}</h3>


    const indexOfLastPost=currentPage * postsPerPage // 10
    const indexOfFirstPost=indexOfLastPost-postsPerPage //0

    const currentPosts=data.slice(indexOfFirstPost,indexOfLastPost)

    const totalPages=Math.ceil(data.length/postsPerPage)
    console.log({totalPages})
  return (
    <div id='ab'>

  <table>
 <thead>
    <tr>
        <th>Id</th>
        <th>title</th>
        <th>body</th>
    </tr>
 </thead>
  <tbody>
    {currentPosts.map((pos)=>(
    <tr key={pos.id}>
       <td>{pos.id}</td>
       <td>{pos.title}</td>
       <td>{pos.body}</td>
    </tr>
    ))}
  </tbody>
  </table>
  <div>
    {[...Array(totalPages)].map((_,i)=>(
    <button
    key={i}
    onClick={()=>setCurrentPage(i+1)}
    >
        {i+1}
    </button>
    ))}
  </div>
  
    </div>
  )
}

export default Effect1