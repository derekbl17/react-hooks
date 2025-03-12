import React,{useState, useEffect} from 'react'

export default function LsClicker() {
    const [clicks,setClicks]=useState(()=>{
        const savedClicks=localStorage.getItem('clicks')
        return savedClicks ? JSON.parse(savedClicks) : 0
    })

    useEffect(()=>{
        localStorage.setItem('clicks',JSON.stringify(clicks));
    },[clicks])
    
    const click=()=>{
        setClicks((prev)=>prev+1)
    }
  return (
    <div>
        <button onClick={click}>+</button>
        <h2>{clicks}</h2>
    </div>
  )
}
