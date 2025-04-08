import { Link } from "react-router-dom";
import Hobbies from "../components/Hobbies";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>This is the home page.</p>
      {/* <a href='/about'>Click me to go to About</a> */}

      <Hobbies />

      <Link to="/about">Click me to go to About</Link>
    </>
  );
}
