import { useState } from "react"
import {TextField} from "./components/TextField.jsx"
import { useNavigate } from "react-router-dom"

export function Login()
{

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const navigate=useNavigate()

    function handleLogin()
    {
        if(email==="user@gmail.com" && password==="123456")
        {
                navigate("/welcome",{state:{username:"Suraj"}})
        }
        else
        {
            alert("Invalid email-id or password")
        }
    }


    return(<div>

        <input type="email" onChange={(event)=>{
            setEmail(event.target.value)
        }} placeholder="Enter email-id" value={email}/>

        <input type="password" onChange={(event)=>{
            setPassword(event.target.value)
        }} placeholder="Enter password" value={password}/>


        <button onClick={handleLogin}>Login</button>

        <button>Register</button>
    </div>)
}