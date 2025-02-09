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
import DrivingLesson from './pages/DrivingLesson';
import ContactUs from './pages/ContactUs';
import Packages from './pages/Packages';
import Instructor_dashboard from './pages/Instructor_dashboard';




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
            <Route path='/contact' element={<ContactUs/>} />
            <Route path='/packages' element={<Packages/>} />
            <Route path='/instructor' element={<Instructor_dashboard/>} />
            <Route path="/driving-lesson" element={<DrivingLesson />} />


            
        </Routes>
        
        <Footer/>
    </div>
  )
}

export default App;