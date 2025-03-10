import React from "react";
import { useState } from "react";

export default function RedBlueCubes() {
  const [cubeArr, setCubeArr] = useState([]);
  const addRedCube = () => {
    setCubeArr((prev) => [...prev, "red"]);
  };
  const addBlueCube = () => {
    setCubeArr((prev) => [...prev, "blue"]);
  };
  const resetCubes = () => {
    setCubeArr([]);
  };

  return (
    <div>
      <button onClick={addRedCube}>Add Red Cube</button>
      <button onClick={addBlueCube}>Add Blue Cube</button>
      <button onClick={resetCubes}>RESET</button>
      <div className="cube-container">
        {cubeArr.map((nu, i) => (
          <div
            style={{ background: nu, color: nu }}
            className="cube"
            key={i + Date.now()}
          ></div>
        ))}
      </div>
    </div>
  );
}
