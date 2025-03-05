import React from "react";
import { useState } from "react";

export default function B() {
  const [b, setB] = useState("B");
  const toggleB = () => {
    setB((prev) => (prev === "" ? "B" : ""));
  };
  return (
    <div>
      <button onClick={toggleB}>B button</button>
      {b === "B" ? <p>{b}</p> : ""}
    </div>
  );
}
