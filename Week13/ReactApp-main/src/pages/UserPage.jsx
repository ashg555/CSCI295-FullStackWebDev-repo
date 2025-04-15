import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function UserPage(){

    const [count, setCount] = useState(0);

    useEffect(()=>{

        function Hello(){
            console.log("Hello")
            setCount(count+1);
            
        }
        Hello();

    }, []);

    return <> <h1> This is for Logged in Users</h1>
    <h1>{count}</h1>
    <h2> Welcome </h2>
    <Outlet/>
    <h2> Footer </h2>
    </>
}