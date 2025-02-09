import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaSchool, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.jpg';
import { Link,useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activePage, setActivePage] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const navItems = [
    { path: "/booknow", label: "BOOK NOW", special: true },
    { path: "/DrivingLesson", label: "DRIVING LESSONS" },
    { path: "/packages", label: "PACKAGES" },
    { path: "/contact", label: "CONTACT" },
    { path: "/about", label: "ABOUT US" },
  ];

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
      <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo & Title */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="h-[50px] w-auto" />
          <h1 className="text-2xl md:text-3xl text-blue-900 font-bold">
            Nandana Learners
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map(({ path, label, special }) => (
            <li key={label}>
              <Link
                to={path}
                className={`py-2 px-4 rounded-full font-medium transition duration-200 ${
                  special
                    ? "bg-yellow-400 text-black hover:bg-yellow-500"
                    : location.pathname === path
                    ? "text-blue-900 font-semibold border-b-2 border-blue-900"
                    : "text-gray-700 hover:text-blue-900"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-100 shadow-lg flex flex-col items-center py-4 space-y-4">
          {navItems.map(({ path, label, special }) => (
            <li key={label}>
              <Link
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`py-2 px-6 rounded-full font-medium transition duration-200 block ${
                  special
                    ? "bg-yellow-400 text-black hover:bg-yellow-500"
                    : location.pathname === path
                    ? "text-blue-900 font-semibold border-b-2 border-blue-900"
                    : "text-gray-700 hover:text-blue-900"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
    </header>
  );
};

export default Navbar;
