import { useState, createContext } from "react";
import "./App.css";
import ShowNum from "./components/ShowNum";
import NumberButton from "./components/NumberButton";
import ShowCube from "./components/ShowCube";
import MakeCube from "./components/MakeCube";
import A from "./components/A";
import B from "./components/B";
import PlusMinus from "./components/PlusMinus";
import ColorCubes from "./components/ColorCubes";
import RedBlueCubes from "./components/RedBlueCubes";
import Trees from "./components/Trees";
import AdderCubes from "./components/AdderCubes";
import UseEffect1 from "./components/UseEffect1";
import UseEffect2 from "./components/UseEffect2";
import UseEffect3 from "./components/UseEffect3";
import LsClicker from "./components/LsClicker";
import UseBooks from "./components/UseBooks";
import Senelis from "./components/Senelis";
import UseRef from "./components/UseRef";

function App() {
  const [textSize, setTextSize] = useState(16);
  const handleClick = () => {
    setTextSize((prev) => (prev === 16 ? 42 : 16));
  };

  const [number, setNumber] = useState(0);
  const numUp = () => {
    setNumber((prev) => prev + 1);
  };

  const [cubeArr, setCubeArr] = useState([]);
  const addCube = () => {
    setCubeArr((prev) => [...prev, 0]);
  };

  const [form, setForm] = useState("circle");
  const toggleForm = () => {
    setForm((prev) => (prev === "circle" ? "cube" : "circle"));
  };

  const [form2, setForm2] = useState("circle");
  const toggleForm2 = () => {
    setForm2((prev) => (prev === "circle" ? "longCube" : "circle"));
  };

  const randomInt = () => {
    let nbr = Math.floor(Math.random() * 21 + 5);
    return nbr;
  };
  const [nm, setNm] = useState(randomInt);
  const randNm = () => {
    setNm(randomInt);
  };



  return (
    <>
      <div>
        
      </div>
      <MakeCube action={addCube} cubeCount={cubeArr.length} />
      <div className="cube-container">
        <ShowCube arr={cubeArr} num={number} />
      </div>
      <div>
        <A />
      </div>
      <div>
        <B />
      </div>
      <button onClick={toggleForm}>change</button>
      <div className={form}></div>
      <button onClick={toggleForm2}>change</button>
      <button onClick={randNm}>random</button>
      <div className={form2} style={{ color: "white", textAlign: "center" }}>
        {nm}
      </div>
      3
      <PlusMinus />
      4
      <ColorCubes />
      5
      <RedBlueCubes />
      Trees
      <Trees />
      <AdderCubes />
      <UseEffect1/>
      <UseEffect2/>
      <UseEffect3/>
      <UseBooks/>
      <LsClicker/>
      <NumberButton action={numUp} />
        <ShowNum num={number} />
      <Senelis num={number}/>
      <UseRef/>
    </>
  );
}

export default App;
