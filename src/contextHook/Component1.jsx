import { useState } from "react";
import { Component2 } from "./Component2";

export const Component1 = () => {
  const [name, setName] = useState("Harish");
  return (
    <>
      <h1>Component 1</h1>
      <Component2 name={name} />
    </>
  );
};
