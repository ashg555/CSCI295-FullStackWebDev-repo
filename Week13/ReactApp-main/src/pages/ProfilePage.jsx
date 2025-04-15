import { Link, useParams } from "react-router-dom";

export default function ProfilePage(){
    const {id}=useParams();
    return <> <h1> This is the Profile Page </h1>
    
 <h2>Showing the profile for user {id}</h2>

    <Link to="/" > Go to Homepage</Link>    
    <Link to="/about" > Go to AboutPage</Link>    
    </>
}