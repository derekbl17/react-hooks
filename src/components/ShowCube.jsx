import React from "react";

export default function showCube({ arr, num }) {
  return (
    <>
      {arr.map((nu, i) => (
        <div className="cube" key={i + Date.now()}>
          <p>{i}</p>
          <p style={{ color: "green" }}>{num}</p>
        </div>
      ))}
    </>
  );
}
