import React from "react";
import { useState } from "react";

export default function PlusMinus() {
  const [num, ChangeNum] = useState(0);
  const minus = () => {
    ChangeNum((prev) => (prev -= 3));
  };
  const plus = () => {
    ChangeNum((prev) => (prev += 1));
  };
  return (
    <div>
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>
      <h4>{num}</h4>
    </div>
  );
}
