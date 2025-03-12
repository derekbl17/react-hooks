import React from "react";
import { useState } from "react";


export default function AdderCubes() {
  const [cubeArr, setCubeArr] = useState([]);
  const addCube = () => {
    setCubeArr((prev) => [...prev,{id: crypto.randomUUID(), val:0}]);
  };
  const numUpper = (ev,indx) => {
    setCubeArr((prev)=>prev.map((obj,i)=>(i===indx ? {...obj, val: obj.val+1 }: obj)))
  };
  return (
    <div>
    <button onClick={addCube}>Add</button>
    <div className="cube-container">
      {cubeArr.map((el, i) => (
        <div className="cubeNums" key={el.id}>
          <button onClick={(e) => numUpper(e, i)}>+</button>
          <h2>{el.val}</h2>
        </div>
      ))}
    </div>
    </div>
  );
}
