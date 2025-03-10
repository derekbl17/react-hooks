import React from "react";
import { useState } from "react";

export default function AdderCubes() {
  const [cubeArr, setCubeArr] = useState([]);
  const addCube = () => {
    setCubeArr((prev) => [...prev, 0]);
  };
  const numUpper = (ev, indx) => {
    console.log(indx);
  };
  return (
    <div>
      <button onClick={addCube}>Add</button>
      {cubeArr.map((el, i) => (
        <div className="cubeNums" key={i + Date.now()}>
          <button onClick={(e) => numUpper(e, i)}>+</button>
          <h2>{el}</h2>
        </div>
      ))}
    </div>
  );
}
