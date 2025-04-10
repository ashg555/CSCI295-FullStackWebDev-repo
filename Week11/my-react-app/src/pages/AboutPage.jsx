import { Link, useLocation } from "react-router-dom";

export default function AboutPage() {

  const location = useLocation();
  const data = location.state || 'You are not logged in';

  return (
    <>
      <h1>About</h1>
      Data: {data}
      <p>This is a website made with React and jsx...</p>
      
      <Link to="/">Click me to go to Home </Link>
      <Link to="/profile">Click me to go to Profile </Link>
    </>
  );
}
