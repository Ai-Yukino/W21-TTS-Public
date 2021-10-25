import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Button from "./Button";
import Display from "./Display";

let mountPoint = document.getElementById("root");

// ReactDOM.render(
//   // <React.StrictMode>
//   [<Button />, <Display />],
//   mountPoint
//   // </React.StrictMode>,
//   // document.getElementById("root")
// );

// ReactDOM.render(
//   <div>
//     <Button />
//     <Display />
//   </div>,
//   mountPoint
// );

ReactDOM.render(
  <React.Fragment>
    <Button />
    <Display />
  </React.Fragment>,
  mountPoint
);
