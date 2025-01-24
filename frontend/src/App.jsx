import React from 'react'
import './index.css';
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Loging from './pages/Loging'
import Home from './pages/Home'
import Footer from './components/Footer';
import InstructerLogin  from './pages/InstructerLogin';
import Signup from './pages/Signup';
import About from './pages/About';

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Loging />} />
            <Route path="/InstLogin" element={<InstructerLogin />} />
            <Route path='/signUp' element={<Signup/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App