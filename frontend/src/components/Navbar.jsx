import React, { useState } from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaSchool } from 'react-icons/fa';
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [activePage, setActivePage] = useState('');

  return (
    <header>
        <div className='bg-blue-900 text-white flex py-3 px-4 justify justify-between items-center '>
            <div className='flex items-center space-x-4 text-white text-[12px]'>
                <FaMapMarkerAlt size={20} color="black" className='ml-5 '/> <p>Balangoda,Sabaragmuwa Province</p>
                <FaPhoneAlt size={20} color="black" /><p>+94 11223344</p>
                <FaSchool size={20} color="orange" /><p>Instruct with LEARNING DRIVING SCHOOL</p>
            </div>
            <div className='flex space-x-4'>
                <Link to='/login'><button className={`py-1 px-3 rounded-full font-medium ${
                activePage === 'learner'
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-blue-900'
              }`}
              onClick={() => setActivePage('learner')}>LEARNER LOGIN</button></Link>
                <Link to='/InstLogin'><button className={`py-1 px-3 rounded-full font-medium ${
                activePage === 'instructor'
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-blue-900'
              }`}
              onClick={() => setActivePage('instructor')}>INSTRUCTOR LOGIN</button></Link>
            </div>
        </div>
        <div className='flex bg-gray-200 justify-between items-center py-4 px-5 shadow-md '>
          <div className='flex '>
            <img src={Logo} alt="" className='h-[60px]  w-auto' />
            <h1 className='ml-4 mt-4 text-2xl text-blue-900 font-bold '>NAME OF DRIVING SCHOOL</h1>
          </div>
          <div className='flex space-x-6'>
            <button className='bg-yellow-400 text-black py-1 px-4 rounded-full font-medium'>BOOK NOW</button>
            <button href="#" className='text-blue-900 font-medium hover:underline'>DRIVING LESSONS </button>
            <button href="#" className='text-blue-900 font-medium hover:underline'>PACKAGES</button>
            <button href="#" className='text-blue-900 font-medium hover:underline'>CONTACT</button>
            <button href="#" className='text-blue-900 font-medium hover:underline'>ABOUT US</button>
          </div>
        </div>
    </header>
  )
}

export default Navbar