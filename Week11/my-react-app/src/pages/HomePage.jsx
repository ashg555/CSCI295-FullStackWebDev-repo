import { Link, useNavigate } from "react-router-dom";
import Hobbies from "../components/Hobbies";

export default function HomePage() {
  const navigate = useNavigate();

  const data = "John";

  function handleLogin() {
    navigate("/user/about", {state:data});
  }

  return (
    <>
      <h1>Home</h1>
      <p>This is the home page.</p>

      <Hobbies />

      <button onClick={handleLogin}>Login</button>

      <Link to="/about">Click me to go to About </Link>
      <Link to="/profile">Click me to go to Profile </Link>
      <Link to="/api">Click me to go to API </Link>
    </>
  );
}
