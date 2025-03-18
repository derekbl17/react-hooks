import { useState, createContext, useReducer, useEffect } from "react";
import "./App.css";
import axios from "axios";
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
import { counterReducer, getUserReducer } from "./reducers/counterReducer";
import {
  addFunc,
  cubeAdd,
  cubeMinus,
  getUser,
  minusFunc,
  sortName,
  sortZip
} from "./actionObjects/actions";

function App() {
  const [textSize, setTextSize] = useState(16);
  const handleClick = () => {
    setTextSize((prev) => (prev === 16 ? 42 : 16));
  };

  const [number, setNumber] = useState(0);
  const numUp = () => {
    setNumber((prev) => prev + 1);
  };

  // const [cubeArr, setCubeArr] = useState([]);
  // const addCube = () => {
  //   setCubeArr((prev) => [...prev, 0]);
  // };

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
  const [countState, dispatchCount] = useReducer(counterReducer, 0);
  const [cubeArr, dispatchCubeArr] = useReducer(counterReducer, []);

  const [users, usersDispatch] = useReducer(getUserReducer, []);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      usersDispatch(getUser(res.data));
      console.log("fetch:", res.data);
    });
  }, []);

  return (
    <>
      <button onClick={() => usersDispatch(sortName("asc"))}>sort name asc</button>
      <button onClick={() => usersDispatch(sortName("desc"))}>sort name desc</button>
      <button onClick={() => usersDispatch(sortZip("asc"))}>sort zip desc</button>
      <button onClick={() => usersDispatch(sortZip("desc"))}>sort zip desc</button>
      {users.map((el, i) => (
        <div key={i}>
          <h2>{el.name} {el.address.zipcode}</h2>
        </div>
      ))}
      <br />
      <h1>{countState}</h1>
      <button onClick={() => dispatchCount(addFunc())}>Count up</button>
      <button onClick={() => dispatchCount(minusFunc())}>Count down</button>
      <br />
      <button onClick={() => dispatchCubeArr(cubeAdd())}>cube up</button>
      <button onClick={() => dispatchCubeArr(cubeMinus())}>cube down</button>
      <input type="number" id="cubeInput" />
      <button onClick={() => dispatchCubeArr(cubeAdd(cubeInput.value))}>
        create given number of cubes
      </button>
      <br />
      {/* <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {number} */}

      <div className="cube-container">
        {cubeArr.map((el, i) => (
          <div className="cube" key={i}></div>
        ))}
      </div>
      {/* <div>
        
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
      <UseRef/> */}
    </>
  );
}

export default App;
