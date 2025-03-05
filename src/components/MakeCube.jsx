import React from "react";

export default function MakeCube({ action, cubeCount }) {
  return (
    <button onClick={action}>
      Click me to add Cube, current cubes:{cubeCount}{" "}
    </button>
  );
}
