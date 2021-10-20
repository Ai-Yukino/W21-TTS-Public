import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<Board />, document.getElementById("root"));
console.log("hello");
// https://stackblitz.com/edit/vite-ghbhiy?file=index.html
// document.querySelector("#root").innerHTML = `<p>Hello world</p>`;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
