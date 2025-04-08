import { useState } from "react";

function SimpleForm() {

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  function checkPwd(e) {
    if (e.target.value.length < 8) {
      setPwd('Too Short')
      console.log('short')
    } else if (e.target.value.length > 20) {
      setPwd('Too Long')
      console.log('long')
    } else {
      setPwd('Good')
      console.log('good')
    }
  }


  return <form>
    <label>First Name</label>
    <input type='text' onChange={(e) => setFName(e.target.value)} value={fname}></input>
    {fname}
    <br />

    <label>Last Name</label>
    <input type='text' onChange={(e) => setLName(e.target.value)} value={lname}></input>
    {lname}
    <br />

    <label>Password</label>
    <input type='password' onChange={(e) => checkPwd(e)}></input>
    {pwd}
    <br />

    <label>Email</label>
    <input type='text' onChange={(e) => setEmail(e.target.value)} value={email}></input>
    {email}
    <br />

    <label>Gender</label>
    {/* <select onChange={(e) => setGender(e.target.value)}>
      <option value=''></option>
      <option value='M'>M</option>
      <option value='F'>F</option>
    </select> */}
    <input type='' onChange={(e) => setGender(e.target.value)} value={gender}></input>
    {gender}
    <br />

    <button>Submit</button>
  </form>
}

export default SimpleForm