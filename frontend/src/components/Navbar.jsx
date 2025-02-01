import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaSchool, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activePage, setActivePage] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white flex flex-wrap py-3 px-4 justify-between items-center">
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:space-x-4 space-y-2 sm:space-y-0 text-white text-sm w-full sm:w-auto">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt size={18} color="black" />
            <p>Balangoda, Sabaragamuwa Province</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt size={18} color="black" />
            <p>+94 11223344</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaSchool size={18} color="orange" />
            <p>Instruct with LEARNING DRIVING SCHOOL</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link to="/login">
            <button
              className={`py-1 px-3 rounded-full font-medium ${activePage === 'learner' ? 'bg-gray-800 text-white' : 'bg-white text-blue-900'
                }`}
              onClick={() => setActivePage('learner')}
            >
              LEARNER LOGIN
            </button>
          </Link>
          <Link to="/InstLogin">
            <button
              className={`py-1 px-3 rounded-full font-medium ${activePage === 'instructor' ? 'bg-gray-800 text-white' : 'bg-white text-blue-900'
                }`}
              onClick={() => setActivePage('instructor')}
            >
              INSTRUCTOR LOGIN
            </button>
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-200 shadow-md">
        <div className="flex justify-between items-center py-4 px-5">
          {/* Logo and Title */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-[50px] w-auto" />
            <h1 className="ml-4 text-xl md:text-2xl text-blue-900 font-bold">
              Nandana Learners 
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="" className="bg-yellow-400 text-black py-1 px-4 rounded-full font-medium">
              BOOK NOW
            </Link>
            <Link to="/DrivingLesson" className="text-blue-900 font-medium hover:underline">
              DRIVING LESSONS
            </Link>
            <Link to="" className="text-blue-900 font-medium hover:underline">
              PACKAGES
            </Link>
            <Link to="/contact" className="text-blue-900 font-medium hover:underline">
              CONTACT
            </Link>
            <Link to="/about" className="text-blue-900 font-medium hover:underline">
              ABOUT US
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col space-y-3 py-3 px-5 md:hidden">
            <Link to="" className="bg-yellow-400 text-black py-1 px-4 rounded-full font-medium">
              BOOK NOW
            </Link>
            <Link to="/DrivingLesson" className="text-blue-900 font-medium hover:underline">
              DRIVING LESSONS
            </Link>
            <Link to="" className="text-blue-900 font-medium hover:underline">
              PACKAGES
            </Link>
            <Link to="" className="text-blue-900 font-medium hover:underline">
              CONTACT
            </Link>
            <Link to="/about" className="text-blue-900 font-medium hover:underline">
              ABOUT US
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
