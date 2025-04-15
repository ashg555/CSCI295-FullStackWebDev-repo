import Button from "./Button"
import "../assets/style.css"
import { useState } from 'react'

const name="Babafemi"

const msg = <h3> Welcome to React App</h3>

function add(a, b) {
    return a+b
}

function Hello({name, courses, msg, age, sch, grades}){
   const {c1, c2,c3}= grades
  
     
  const [day, increaseDay] = useState(5);

  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");

  function dayplusplus(){
    increaseDay(day + 1);
  }
   
    return  <>
        <h1 className="header1" onClick={dayplusplus} >{day}</h1>

        <h1> Hello {name}! you are {age}  years old</h1>
        {msg}
{sch}

<h2>{courses}</h2>
<h2>{c1}</h2>
<h2>{c2}</h2>
<h2>{c3}</h2>
        {/* <Button />
         <p> This is a demo</p>
         {3*4}

         {add(30,5)} */}
        </>
}

export default Hello