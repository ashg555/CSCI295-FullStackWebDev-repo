import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function UserPage() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    function hello() {
      console.log("Hello world");
      setCount(count + 1);
    }

    hello();

  }, []);

  return (
    <>
    {count}
      <h1>This is for logged in users</h1>
      <Outlet />
      <h2>Footer</h2>
    </>
  );
}
