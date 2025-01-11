import React from 'react'
import './index.css';
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Loging from './pages/Loging'
import Home from './pages/Home'
import Footer from './components/Footer';
import InstructerLogin  from './pages/InstructerLogin';
import Signup from './pages/Signup';

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Loging />} />
            <Route path="/InstLogin" element={<InstructerLogin />} />
            <Route path='/signUp' element={<Signup/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App