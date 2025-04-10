import { Link, useParams } from "react-router-dom";

export default function AboutPage() {

  const params = useParams();
  console.log(params)

  return (
    <>
      <h1>Profile {params.id}</h1>
      <p>I am green</p>
      <p>Your age is {params.age}</p>

      <Link to="/">Click me to go to Home </Link>
      <Link to="/about">Click me to go to About </Link>
    </>
  );
}
