import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import "./index.css";

// ReactDOM.render(
//   <PrimeraApp saludo="Hola, soy Goku" />,
//   document.querySelector("#root")
// );

ReactDOM.render(<CounterApp value={10} />, document.querySelector("#root"));
