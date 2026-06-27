import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { About } from "./About.jsx";
import { Login } from "./Login.jsx";
import { useState, useRef } from "react";
import "./css/style.css";
import { Menu } from "./Menu.jsx";

export const Home = () => {
  const [result, setResult] = useState(0);
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);

  const num1Ref = useRef();
  const num2Ref = useRef();

  const addition = () => {
    setResult(n1 + n2);
  };

  // const textFieldCss={
  //   display:"block",
  //   width:"200px",
  //   marginBottom:"10px",
  //   fontSize:"20px"
  // }

  function changeColor(field) {
    if (field == "n1") {
      num1Ref.current.style.backgroundColor = "red";
      num1Ref.current.style.color = "white";
    } else {
      num2Ref.current.style.backgroundColor = "red";
      num2Ref.current.style.color = "white";
    }
  }
  function resetColor(field) {
    if (field == "n1") {
      num1Ref.current.style.backgroundColor = "white";
      num1Ref.current.style.color = "black";
    } else {
      num2Ref.current.style.backgroundColor = "white";
      num2Ref.current.style.color = "black";
    }
  }

  return (
    <div>
      {/* <Header/>
          <Login/>
      <Footer/> */}
      <input
        type="number"
        className="text-field"
        ref={num1Ref}
        placeholder="Enter a number"
        onBlur={() => resetColor("n1")}
        onFocus={() => changeColor("n1")}
        onChange={function (event) {
          setN1(parseInt(event.target.value.trim()));
        }}
      />
      <input
        type="number"
        className="text-field"
        ref={num2Ref}
        onBlur={() => resetColor("n2")}
        onFocus={() => changeColor("n2")}
        placeholder="Enter a number"
        onChange={function (event) {
          setN2(parseInt(event.target.value.trim()));
        }}
      />

      <button className="text-field" onClick={addition}>
        Add
      </button>
      <h1> {result}</h1>
    </div>
  );
};
