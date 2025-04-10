import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <>
      <h1>error: No page found.</h1>

      <Link to="/">Click me to go to Home </Link>
      <Link to="/about">Click me to go to About </Link>
      <Link to="/profile">Click me to go to Profile </Link>
    </>
  );
}
