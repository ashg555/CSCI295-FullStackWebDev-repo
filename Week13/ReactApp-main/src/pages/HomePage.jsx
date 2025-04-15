import { Link, useNavigate } from "react-router-dom";
import Hobbies from "../components/Hobbies";

export default function HomePage(){

    const navigate = useNavigate();
    const data= {fname:"John", lname:"Thomas"}
    function handleLogin(){
        navigate('/about', {state: data})
    }

    return <> <h1> This is the Homepage </h1>
    
    <button onClick={handleLogin}> Login </button>

    <Hobbies />

    <Link to="/about"  > Go to Aboutpage</Link>   
    
    </>
}