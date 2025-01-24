import React from 'react'
import './index.css';
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Loging from './pages/Loging'
import Home from './pages/Home'
import Footer from './components/Footer';
import InstructerLogin  from './pages/InstructerLogin';
import Signup from './pages/Signup';
import DrivingLesson from './pages/DrivingLesson';


const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<DrivingLesson />} />
            <Route path="/login" element={<Loging />} />
            <Route path="/InstLogin" element={<InstructerLogin />} />
            <Route path='/signUp' element={<Signup/>} />
            <Route path='/DrivingLesson' element={<DrivingLesson/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App