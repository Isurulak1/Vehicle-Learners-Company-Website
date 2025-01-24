import React, { useEffect, useState } from 'react';
import Fullimage from '../assets/bout.jpg';
import a1 from '../assets/A1.jpg';
import a2 from '../assets/A2.jpg';
import a3 from '../assets/A3.jpg';
import a4 from '../assets/A4.jpeg';
import a5 from '../assets/A5.jpg';
import a6 from '../assets/A6.jpg';
import a7 from '../assets/A7.jpg';
import a8 from '../assets/A8.jpg';

const About = () => {
  const data = [
    {
      icon: "🚗", // Replace this with a proper icon (e.g., from Heroicons)
      title: "Enhanced Safety Standards",
      description:
        "Our trainers are certified professionals, skilled in advanced safety techniques to ensure a secure learning experience.",
    },
    {
      icon: "❓", // Replace with an appropriate icon
      title: "Certified Instructors",
      description:
        "Our team consists of licensed experts with years of experience and a commitment to quality education.",
    },
    {
      icon: "⏰", // Replace with an appropriate icon
      title: "Flexible Scheduling",
      description:
        "We offer training sessions at your convenience, making it easy to learn at a time that suits you best.",
    },
  ];


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
        className={`bg-gradient-to-r from-red-600 to-yellow-500 transition-all duration-700 ${isVisible ? 'opacity-0 scale-100' : 'opacity-100 scale-100'
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
        <div className="absolute top-0 left-0 w-full p-6 text-center z-10 flex flex-col items-center justify-center h-full  bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl text-white font-extrabold mb-6">
            "Nandana Driving School: Driving Excellence"
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mt-4">
            Nandana Driving School is dedicated to creating skilled, confident drivers through quality education and a focus on safety.
          </p>
        </div>
      </div>
      <div className="bg-blue-600 text-center py-2">
        <p className="text-white text-lg">
          <span className="text-yellow-400">Government Approved</span>
          <span className="text-white"> "A" Grade,</span>
          <span className="text-green-400"> First Class Driving School</span>
          <span className="text-white"> in Sri Lanka.</span>
        </p>
      </div>
      {/* About Section */}
      <div className="bg-gray-50 py-8 px-4 sm:px-8 lg:px-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 text-center mb-6">
          "NANDANA DRIVING SCHOOL"
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          The business was first established in 1985 with a single vehicle, marking the humble beginnings of what would become a reputable name in the industry. In the early years, the founder built a strong foundation of knowledge and experience by working in the transport sector, where they developed a deep understanding of the field. Seeking to broaden their expertise, the founder ventured overseas, where they gained significant hands-on experience as a professional driver, further enriching their skills.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our institute is staffed with experienced professional instructors and a friendly team dedicated to providing exceptional service. Our mission is to develop highly skilled and disciplined drivers who contribute positively to society. We take pride in being a fully responsible driving school in Sri Lanka. We guide our students through the entire process of obtaining a driving license, including assistance with both theory and practical exams. Additionally, we provide vehicles for driving tests and offer formal training programs for existing license holders to further enhance their skills. To accommodate individual needs, students can schedule their training sessions at their preferred times.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="bg-white py-12 px-6 sm:px-12 lg:px-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
          Explore Our Driving School
        </h2>

        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              a1, a2, a3, a4, a5, a6, a7, a8
            ].map((img, index) => (
              <div key={index} className="relative group">
                <img
                  src={img}
                  alt={`Driving School Training ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* why we use */}
      <div className="py-20 bg-gradient-to-br from-indigo-50 to-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <div className="flex justify-center mb-10">
            <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 mb-16">
            At DriveSmart Academy, we tailor our lessons to meet your unique needs,
            ensuring you're confident and prepared for all tests and real-world driving challenges.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.map((item, index) => (
              <div
                key={index}
                className="relative group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300"
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-md">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4 group-hover:text-indigo-500 transition duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
