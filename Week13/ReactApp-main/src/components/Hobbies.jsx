import { useState } from "react";
import HobbyItem from "./HobbyItem";
import Button from "./Button";
import Demo from "./Demo";

export default function Hobbies(){
    const [hobbies, setHobbies]= useState([])
    const [hobby, setHobby]= useState("")
    const [fullname, setFullname]= useState({fname:"", lname:""})
    

    function addHobby(e){
        e.preventDefault();
        setHobbies([...hobbies,hobby])
        console.log(hobby);
    }

    return <>
    
        <input type="text" onChange={(e)=> setHobby(e.target.value) } value={hobby}/>
        
        {/* <input type="text" onChange={(e)=> setFullname({...fullname, fname: e.target.value})}
         placeholder="firstname" value={fullname.fname}/>


        <input type="text" onChange={(e)=> setFullname({...fullname, lname: e.target.value})} 
        placeholder="lastname" value={fullname.lname}/> */}
{/*         
        <h1> F :      {fullname.fname}</h1>
        <h1>  L:      {fullname.lname}</h1> */}
        
        <button onClick={(e)=>addHobby(e)}> Add Hobbies </button>

        {
            hobbies.length==0 ? (<h1>Nothing yet</h1>) : (<ul>
            {hobbies.map(h=> 
                <HobbyItem    hobby={h} hobbies={hobbies} setHobbies={setHobbies}  />
            )}
            </ul>)
        }
        
        <Demo>
            {/* <Button> </Button> */}
            <h1>Hello </h1>
            <h2>Bye</h2>
        </Demo>
    </>
}