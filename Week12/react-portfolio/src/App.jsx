import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <Nav />
    <Header />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </>
  )
};

export default App
