import React from "react";
import { useState } from "react";

export default function ColorCubes() {
  const [cubeArr, setCubeArr] = useState([]);
  const addCube = () => {
    setCubeArr((prev) => [...prev, Math.floor(Math.random() * 9)]);
  };
  const colorArr = [
    "red",
    "yellow",
    "green",
    "grey",
    "blue",
    "pink",
    "black",
    "orange",
    "brown",
  ];
  return (
    <div>
      <button onClick={addCube}>Add Color Cube</button>
      <div className="cube-container">
        {cubeArr.map((nu, i) => (
          <div
            style={{ background: colorArr[nu] }}
            className="cube"
            key={i + Date.now()}
          ></div>
        ))}
      </div>
    </div>
  );
}
