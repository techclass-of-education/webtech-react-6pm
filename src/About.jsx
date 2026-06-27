import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { Menu } from "./Menu.jsx";
import { useState } from "react";

export const About=()=> {

  const [names,setNames]=useState(["Yogesh","Vijay","Sumit","Manish"])

  const [persons,setPersons]=useState([
    {name:"Yogesh",age:23},
    {name:"Vijay",age:23},
    {name:"Sumit",age:23},
    {name:"Manish",age:23}
  ])
  return (
    <div>
      
      <Header title="About" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quos
        incidunt earum quaerat itaque placeat, ducimus autem est asperiores! Ut
        vel voluptatum necessitatibus aut modi consequatur quis deserunt
        reprehenderit itaque!
      </p>
      <ul>
       
      {
        //jsx rule in jsx for iteration only can use map()
        names.map(function(e)
      {
        return (<li>{e}</li>)  // this is a jsx return from map()
      })
      }
      </ul>

      <hr />
      <ul>
{
  persons.map(function(e){
    return (<li>{e.name} {e.age}</li>) // this is a jsx return from map()
  })
}
</ul>
      <Footer />
    </div>
  );
}
