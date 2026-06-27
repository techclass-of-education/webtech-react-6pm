import { useState } from "react"

export const Register=()=>
{
    const [name,setName]=useState("")
    const [dob,setDob]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    function handleSubmit(event)
    {
        event.preventDefault()
        console.log(name,dob,email,password)
    }


    return(<div className="alert alert-success w-25 mx-auto" role="alert">
        <h2 className="display-6">Register Here</h2>
        <hr/>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" onChange={function(event){
        setName(event.target.value)
    }} id="name"/>
  </div>
  <div className="mb-3">
    <label htmlFor="dob" className="form-label">Date of Birth</label>
    <input type="date" className="form-control"  onChange={function(event){
        setDob(event.target.value)
    }} id="dob"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email"  onChange={function(event){
        setEmail(event.target.value)
    }}/>
  </div>
  <div className="mb-3">
    <label htmlFor="pass" className="form-label">Password</label>
    <input type="password" className="form-control" id="pass" onChange={function(event){
        setPassword(event.target.value)
    }}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>)
}