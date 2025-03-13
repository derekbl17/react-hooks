import React,{useEffect,useState, useRef} from 'react'
import axios from 'axios'



export default function UseRef() {
    const [data,setData]=useState([])
    const showAllRef = useRef(false);
    useEffect(()=>{
        axios.get('https://reqres.in/api/users?page=2').then((res)=>{
            setData(res.data.data);
            console.log(res.data.data)
        })
        .catch((err)=>console.error(`Error in fetch: `,err))
    },[])

    const handleShowAll = () => {
        showAllRef.current = true;
        setData([...data]);
    };

    const initialUsers = data.filter(
        (user) => user.first_name === "George" || user.first_name === "Lindsay"
    );

  return (
    <div className="card-container">
            <h3>API DATA</h3>
            {data.length > 0 ? (
                <>
                    {(showAllRef.current ? data : initialUsers).map((ob) => (
                        <div key={ob.id} className="card">
                            <img src={ob.avatar} alt={ob.first_name} />
                            <h4>
                                {ob.first_name} {ob.last_name}
                            </h4>
                            <p>{ob.email}</p>
                        </div>
                    ))}
                    {!showAllRef.current && (
                        <button onClick={handleShowAll}>Load More Users</button>
                    )}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
  )
}
