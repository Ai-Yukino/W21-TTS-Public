import { useState } from "react";
// import ReactDOM from "react-dom";

const Button = () => {
  const [count, setCount] = useState(0);
  console.log(typeof count);
  return <button onClick={() => setCount("hello class")}>{count}</button>;
};

export default Button;

// ReactDOM.render(<Button />, mountNode);
