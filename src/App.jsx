import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Header from './components/header'
import About from './components/about'
import Dashboard from './components/dashboard'
import Home from './components/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
 
    </>
  )
}

export default App
