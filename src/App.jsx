
import {Home} from "./Home.jsx"
import { About } from './About.jsx'
import { Contact } from './Contact.jsx'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Menu } from "./Menu.jsx"
import {Login} from "./Login.jsx"
import { Welcome } from "./Welcome.jsx"
import { Register } from "./Register.jsx"
import { useState } from "react"
import { PersonDetails } from "./PersonDetails.jsx"
// import { Component1 } from "./contextHook/Component1.jsx"
import { Component1 } from "./withContextHook/Component1.jsx"
import  BankHome from "./bankContextExample/Home.jsx"  // default import
import { Dashboard } from "./bankContextExample/Dashboard.jsx"
function App() {
  const [isLogin,setLogin]=useState(false)
  return (
    <BrowserRouter>
      <Menu isLogin={isLogin}/>
      <Routes>

        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/person_details" element={<PersonDetails/>}/>
        {/* <Route path="/noContextHook" element={<Component1/>}/> */}
        <Route path="/contextHook" element={<Component1/>}/>
        <Route path="/bhome" element={<BankHome/>}/>
        <Route path="/dash" element={<Dashboard/>}/>

      </Routes>
    </BrowserRouter>
   
  )
}

export default App
