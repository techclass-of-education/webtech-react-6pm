import { useState } from "react";
import { Component2 } from "./Component2";
import { createContext } from "react";

export const nameContext = createContext();

export const Component1 = () => {
  const [name, setName] = useState("Harish");
  return (
    <>
      <h1>Component 1</h1>
      <nameContext.Provider value={name}>
        <Component2 />
      </nameContext.Provider>
    </>
  );
};
