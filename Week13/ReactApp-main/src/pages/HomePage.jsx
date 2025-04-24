import { Link, useNavigate } from "react-router-dom";
import Hobbies from "../components/Hobbies";
import Button from 'react-bootstrap/Button';
import UncontrolledExample from "../components/UncontrolledExample";

export default function HomePage(){

    const navigate = useNavigate();
    const data= {fname:"John", lname:"Thomas"}
    function handleLogin(){
        navigate('/about', {state: data})
    }

    return <> <h1> This is the Homepage </h1>
    
    <button onClick={handleLogin}> Login </button>
    <br/>

    <Hobbies />
    <br/>

    <Button>Button</Button>

    <Link to="/about"> Go to Aboutpage</Link>   

    <UncontrolledExample/>
    
    </>
}