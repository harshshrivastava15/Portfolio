import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import Navbar from './Pages/Home/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home />
    </>
  )
}

export default App
