import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter.js"
import * as MyMath from "./components/Math.js"


const component = React.createElement(Counter);

const root = document.querySelector("#root");

ReactDOM.render(component, root);

MyMath.sum()

