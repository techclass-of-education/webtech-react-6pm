import { Component3 } from "./Component3";

export const Component2 = ({ name }) => {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 name={name} />
    </>
  );
};
