import { Component4 } from "./Component4";

export const Component3 = ({ name }) => {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 name={name} />
    </>
  );
};
