import React from "react";
import { useState } from "react";
import C from "./C";

export default function A() {
  const [a, setA] = useState("");
  const showA = () => {
    setA((pre) => (pre === "A" ? "C" : "A"));
  };
  return (
    <div>
      <button onClick={showA}>A button</button>
      <p>{a}</p>
      <C ltr={a === "" ? "" : a === "C" ? "A" : "C"} />
    </div>
  );
}
