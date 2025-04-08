import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>This is a website made with React and jsx...</p>
      {/* <a href='/'>Click me to go to Home</a> */}
      <Link to="/">Click me to go to Home</Link>
    </>
  );
}
