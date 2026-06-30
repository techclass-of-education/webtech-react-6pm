import { useEffect, useState } from "react";

export const EffectHookExample = () => {
  const [num1, setNum1] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num2, setNum2] = useState(0);
  const [msg, setMsg] = useState("");

  function sum1() {
    setNum1((prevNum) => prevNum + 1);
  }

  function sum2() {
    setNum2((prevNum) => prevNum + 1);
  }

  function sum3() {
    setNum3((prevNum) => prevNum + 1);
  }

  useEffect(() => {

    setMsg("Value of Num1="+num1)
    console.log("Use Effect run")
  },[num1,num2]);

  return (
    <>
      <h1>{msg}</h1>

      <h1>Num1={num1}</h1>
      <h1>Num2={num2}</h1>
      <h1>Num3={num3}</h1>
      <button onClick={sum1}>Num1</button>
      <button onClick={sum2}>Num2</button>
      <button onClick={sum3}>Num3</button>
    </>
  );
};
