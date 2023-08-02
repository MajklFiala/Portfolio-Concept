import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx';
import Projects from './components/Projects';
import bg from './Images/bg.png'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className='background'>
    <Router>
    <Navbar></Navbar>
    <Home/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </Router>
    </div>
   
  )
}

export default App
