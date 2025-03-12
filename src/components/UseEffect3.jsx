import React,{useEffect,useState} from 'react'
import axios from 'axios'



export default function UseEffect3() {
    const [data,setData]=useState(null)
    const [expanded,setExpanded]=useState(null)
    const [marked,setMarked]=useState([])

    useEffect(()=>{
        axios.get('https://reqres.in/api/users?page=2').then((res)=>{
            setData(res.data.data);
            console.log(res.data.data)
        })
        .catch((err)=>console.error(`Error in fetch: `,err))
    },[])
    const marker=()=>{
        const targets=["Rachel","Tobias"]
        setMarked(targets)
    }
  return (
    <div className='card-container'>
        <button onClick={marker}>MARK RED</button>
        <h3>API DATA</h3>
        {data ? ( data.map((ob)=> <div  key={crypto.randomUUID()} className='card'>
            <h4 style={{color:marked.includes(ob.first_name) ? 'red' : 'black'}}>{ob.first_name} {ob.last_name}</h4>
        </div>)  ): <p>Loading...</p>}
    </div>
  )
}
