import { Context } from "../assets/context";
import Tevas from "./Tevas";

export default function Senelis({ num }) {
  const values = {
    backgroundColor: "grey",
    textColor: "azure",
    text: "Naujas tekstas",
    textFont: "monospace",
    numb: num,
  };
  return (
    <Context.Provider value={values}>
      <div>
        <h1>Senelis</h1>
        <Tevas />
      </div>
    </Context.Provider>
  );
}
