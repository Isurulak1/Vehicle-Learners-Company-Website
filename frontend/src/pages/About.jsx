import React, { useEffect, useState } from 'react';
import Fullimage from '../assets/bout.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolltop = window.scrollY;
      setIsVisible(scrolltop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div
        className={`bg-gradient-to-r from-red-600 to-yellow-500 transition-all duration-700 ${
          isVisible ? 'opacity-0 scale-100' : 'opacity-100 scale-100'
        }`}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white p-6 animate-pulse">
          "දක්ෂ රියදුරෙකු බිහි කිරීම, අපගේ පරමාදර්ශයයි."
        </h1>
      </div>

      {/* Image Section */}
      <div
        className="relative h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Fullimage})` }}
        role="img"
        aria-label="Driving School Background Image"
      >
        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full p-6 text-center z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl text-white font-extrabold mb-6">
            "Nandana Driving School: Driving Excellence"
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mt-4">
            Nandana Driving School is dedicated to creating skilled, confident drivers through quality education and a focus on safety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
