import { Header } from "./Header.jsx";
import {Footer} from "./Footer.jsx";
import { About } from "./About.jsx";
import {Login} from "./Login.jsx"
import { useState } from "react";
import "./css/style.css"

export function Home() {

const [result,setResult]=useState(0)
const [n1,setN1]=useState(0)
const [n2,setN2]=useState(0)

function addition()
{
  setResult(n1+n2)
}

// const textFieldCss={
//   display:"block",
//   width:"200px",
//   marginBottom:"10px",
//   fontSize:"20px"
// }

  return (
    <div>
      {/* <Header/>
          <Login/>
      <Footer/> */}
      <input type="number" className="text-field" placeholder="Enter a number" onChange={function(event){
            setN1(parseInt(event.target.value.trim()))
      }} />
      <input type="number" className="text-field"  placeholder="Enter a number" onChange={function(event){
        setN2(parseInt(event.target.value.trim()))
      }}/>

<button className="text-field" onClick={addition}>Add</button>
    <h1>  {result}</h1>
    </div>
  );
}
