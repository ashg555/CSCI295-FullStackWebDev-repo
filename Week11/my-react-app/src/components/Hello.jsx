import { useState } from 'react'
import Button from './Button'

// const name = 'User'
// const msg = 'This is a demo'

function add(a, b) {
  return a+b
}

function Hello({name, msg, age, courses, grades}) {
  // const {name, msg, age} = props


  const [day, increaseDay] = useState(5);

  function dayplusplus() {
    increaseDay(day + 1);
  }

  var person = {
    "pname":"john",
    "psch":"houghton"
  }

  const {pname, psch} = person;
  const {c1, c2, c3} = grades;

  const {firstname, setfname} = useState("");
  const {lastname, setlname} = useState("");

  return <div>
      <h1 onClick={dayplusplus}>Click me: {day}</h1>
      <h2>Hello {name}! {age}</h2>
      <p>{msg}</p>
      <p>{3*5}</p>
      <p>{pname} {psch} {courses}</p>
      <Button />
      <p>{c1} {c2} {c3}</p>
      <p>{add(4,8)}</p>
    </div>
}

export default Hello