import { useContext } from "react";
import { nameContext } from "./Component1";

export const Component4 = () => {
  const name=useContext(nameContext)
  return (
    <>
      <h1>Component 4 {name}</h1>
    </>
  );
};
