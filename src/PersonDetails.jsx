import { useState,useRef } from "react"
import "./css/style.css"
export function PersonDetails(){
   const nameRef=useRef()
   const ageRef=useRef()
   const numRef=useRef()
   const cityRef=useRef()

   const [name,setName]=useState("")
   const [updateId,setUpdateId]=useState(-1)
   const [age,setAge]=useState(0)
   const [mobile,setMobile]=useState("")
   const [city,setCity]=useState("")

   const [persons,setPersons]=useState([
    {id:1,name:"Rahul",age:34,mobile:"3453536575",city:"Nagpur"},
    {id:2,name:"Manish",age:33,mobile:"3453536575",city:"Nagpur"},
    {id:3,name:"Mona",age:24,mobile:"3453536575",city:"Nagpur"},
    {id:4,name:"Ritika",age:31,mobile:"3453536575",city:"Nagpur"},
    {id:5,name:"Harish",age:64,mobile:"3453536575",city:"Nagpur"},
    {id:6,name:"Manoj",age:14,mobile:"3453536575",city:"Nagpur"},
    {id:7,name:"Mohan",age:44,mobile:"3453536575",city:"Nagpur"},
])

   function deleteRow(p)
   {
    const delPersons=persons.filter((e)=>
    {
        return e.id!=p.id
    })
    setPersons([...delPersons])
   }

   function updateForm(p)
   {
    setName(p.name)
    setAge(p.age)
    setMobile(p.mobile)
    setCity(p.city)
    setUpdateId(p.id)
   }

   function updateRow()
   {
    const updatePersons=persons.map((e)=>
    {
        if(e.id==updateId)
        {
            e.name=name
            e.age=age
            e.mobile=mobile
            e.city=city
            return e
        }
        else
        {
            return e
        }
    })
    setPersons([...updatePersons])
   }

    function addRows(){
        // const name=nameRef.current.value
        // const age=ageRef.current.value
        // const num=numRef.current.value
        // const city=cityRef.current.value
        // const p={name,age,num,city}
        let id=1
        if(persons.length>0)
        {
                id=persons[persons.length-1].id+1
        }
        
        
        const p={id,name,age,mobile,city}
        setPersons([...persons,p])
        console.log(persons)
    }
    
return(
<div>
   <input placeholder="enter name" onChange={event=>setName(event.target.value)} value={name}/>
   <input placeholder="enter age" onChange={event=>setAge(event.target.value)} value={age}/>
   <input placeholder="enter mobile number" onChange={event=>setMobile(event.target.value)} value={mobile}/>
   <input placeholder="enter city" onChange={event=>setCity(event.target.value)} value={city}/>
   {/* <input placeholder="enter name" ref={nameRef}/>
   <input placeholder="enter age" ref={ageRef}/>
   <input placeholder="enter mobile number" ref={numRef}/>
   <input placeholder="enter city" ref={cityRef}/> */}
   <button onClick={addRows}>ADD</button>
   <button onClick={updateRow}>Update</button>
   <hr/>
   <table><thead>
<tr><th>#</th><th>Name</th><th>Age</th><th>Mobile</th><th>City</th><th>Action</th>
</tr></thead>
<tbody>
    {
        persons.map((e,i)=>{
            return(<tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.mobile}</td>
            <td>{e.city}</td>
            <td><button onClick={()=>deleteRow(e)}>Delete</button></td>
            <td><button onClick={()=>updateForm(e)}>Update</button></td>
            </tr>)
        })
    }
</tbody>

   </table>
</div>

    )
}