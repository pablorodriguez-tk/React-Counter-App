import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import "./index.css";

ReactDOM.render(<CounterApp value={10} />, document.querySelector("#root"));
