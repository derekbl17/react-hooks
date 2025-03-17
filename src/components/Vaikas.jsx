import { useContext } from "react";
import { Context } from "../assets/context";

export default function Vaikas() {
  const { text, textColor, textFont, backgroundColor, numb } =
    useContext(Context);
  return (
    <div style={{ background: backgroundColor }}>
      <h3 style={{ color: textColor, fontFamily: textFont }}>
        {text} {numb}
      </h3>
    </div>
  );
}
