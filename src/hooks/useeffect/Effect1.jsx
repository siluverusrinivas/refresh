import React, { useEffect, useState } from 'react'

const Effect1 = () => {
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState(null)
  const [input,setInput]=useState(0)
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const data=await fetch('https://jsonplaceholder.typicode.com/users')
                if(!data.ok)
                {
                    throw new Error(`response status:${data.status}`)
                }
            
                const res=await data.json()
                console.log(res)
                setData(res)
            }
            catch(err)
            {
                setError(err.message)
            }
            finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])
    if(loading) return <h1>Loading....</h1>
    if(error) return <h1>{error}</h1>

    const filterData=data.slice((0,Number(input)))

  return (
    <div>
        <h1>fetch the data using fetch</h1>
        <input type='number' placeholder='enter anu number' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <div>
            {filterData.map((res)=>(
                <div key={res.id}>
                    {res.name}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Effect1