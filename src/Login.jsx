import {TextField} from "./components/TextField.jsx"

export function Login()
{
    return(<div>
        <TextField textType="email" textPH="Enter Username" textName="email"/>
        <TextField textType="password" textPH="Enter Password" textName="pass"/>
        <button>Login</button>
        <button>Register</button>
    </div>)
}