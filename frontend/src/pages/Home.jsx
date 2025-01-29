import React, { useEffect, useState } from "react";
import VehicleLicensePrep from "../components/HomeContent";
import { FaArrowRight } from "react-icons/fa";

const HomePage = () => {
  const images = [
    "https://images.pexels.com/photos/1386649/pexels-photo-1386649.jpeg",
    "https://th.bing.com/th/id/OIP.Gf9oJR2rBJzw_sJOFLmjuAHaE8?rs=1&pid=ImgDetMain",
    "https://images.pexels.com/photos/3822676/pexels-photo-3822676.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Slower transition for a smoother effect

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="text-center py-12 bg-gradient-to-r from-blue-500 to-indigo-600 w-full shadow-md text-white">
        <h1 className="text-5xl font-extrabold tracking-wide animate-fadeIn">
          "Drive With Confidence, Learn With Us!"
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-100">
          Join the Perera Driving School family today! Register online and start your journey.
        </p>
        <div class="flex justify-center">
          <button class="mt-6 px-8 py-3 flex items-center gap-2 text-lg font-semibold bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg">
            Register Now <FaArrowRight />
          </button>
        </div>
      </header>

      {/* Image Carousel */}
      <section className="relative w-full h-96 max-w-5xl overflow-hidden rounded-xl shadow-lg mt-8">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Driving School Illustration ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 transform ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          />
        ))}
      </section>

      <footer className="w-full bg-gray-200 py-8 text-white flex justify-center items-center mt-10 shadow-inner">
        <VehicleLicensePrep />
      </footer>
    </div>
  );
};

export default HomePage;
