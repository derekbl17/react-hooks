import React,{useEffect,useState} from 'react'
import axios from 'axios'



export default function UseEffect1() {
    const [data,setData]=useState(null)
    const [expanded,setExpanded]=useState(null)

    useEffect(()=>{
        axios.get('https://reqres.in/api/users?page=1').then((res)=>{
            setData(res.data.data);
            console.log(res.data.data)
        })
        .catch((err)=>console.error(`Error in fetch: `,err))
    },[])
    const expand=(e,avatar)=>{
        setExpanded(avatar)
    }
    const clicked=()=>{
        console.log("CLICK")
        setExpanded(null)
    }
  return (
    <div className='card-container'>
        <h3>API DATA</h3>
        {data ? ( data.map((ob)=> <div  key={crypto.randomUUID()} className='card'>
            <img onClick={(e)=>expand(e,ob.avatar)} src={ob.avatar} alt={ob.first_name} />
            <h4>{ob.first_name} {ob.last_name}</h4>
            <p>{ob.email}</p>
        </div>)  ): <p>Loading...</p>}
        {expanded && (<div className="expanded" onClick={clicked}>
                    <img src={expanded} alt="Expanded Avatar" />
                </div>)}
    </div>
  )
}
