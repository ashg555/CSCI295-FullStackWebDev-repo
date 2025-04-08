import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hello from "./components/Hello";
import SignUpForm from "./components/SignUpForm";
import AddForm from "./components/AddForm";
import SimpleForm from "./components/SimpleForm";
import Hobbies from "./components/Hobbies";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  // const [count, setCount] = useState(0)

  // const courses = ["Web Development", "Programming", "STEM"]
  // const grades = {
  //   "c1": "A",
  //   "c2": "B+",
  //   "c3": "A-"
  // }

  // const [day, increaseDay] = useState(5);

  // function dayplusplus() {
  //   increaseDay(day + 1);
  // }

  return (
    <div className="App">
      {/* <HomePage />

      <AboutPage /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>

      {/* <h1 onClick={dayplusplus}>{day}</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My React App</h1> */}

      {/* <Hobbies /> */}

      {/* <AddForm />  */}

      {/* <SimpleForm /> */}

      {/* <Hello name='User' msg='This is a message' age='21' courses={courses} grades={grades} />
      {/* <Hello name='End' msg='You are the second user.' /> */}
      {/* <SignUpForm /> */}

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          The App.jsx has been edited!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
