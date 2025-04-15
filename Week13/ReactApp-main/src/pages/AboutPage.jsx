import { Link, useLocation } from "react-router-dom";

export default function AboutPage(){

    const location= useLocation();
    const data= location.state || "User";

    return <> <h1> This is the About Page for {data.fname} {data.lname} </h1>

    {/* <a href="/"> Go to Homepage </a> */}

    <Link to="/" > Go to Homepage</Link>    
    </>
}