import React from "react";
import { useState } from "react";

export default function Trees() {
  const [cubeArr, setCubeArr] = useState([]);
  const addAzuolas = () => {
    setCubeArr((prev) => [...prev, "azuolas"]);
  };
  const addBerzas = () => {
    setCubeArr((prev) => [...prev, "berzas"]);
  };
  const addUosis = () => {
    setCubeArr((prev) => [...prev, "uosis"]);
  };
  return (
    <div>
      <button onClick={addAzuolas}>azuolas</button>
      <button onClick={addBerzas}>berzas</button>
      <button onClick={addUosis}>uosis</button>
      <div className="tree-container-container">
        <div className="tree-container">
          <h2>azuolas</h2>
          <div>
            <div className="cube-container">
              {cubeArr.map((nu, i) =>
                nu === "azuolas" ? (
                  <div className="cubeTree" key={i + Date.now()}>
                    {nu}
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
        <div className="tree-container">
          <h2>berzas</h2>
          <div>
            <div className="cube-container">
              {cubeArr.map((nu, i) =>
                nu === "berzas" ? (
                  <div className="cubeTree" key={i + Date.now()}>
                    {nu}
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
        <div className="tree-container">
          <h2>uosis</h2>
          <div>
            <div className="cube-container">
              {cubeArr.map((nu, i) =>
                nu === "uosis" ? (
                  <div className="cubeTree" key={i + Date.now()}>
                    {nu}
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
