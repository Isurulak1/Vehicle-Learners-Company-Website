import React from 'react';

// Import images
import AutoImg from '../assets/drivingLessons/auto.png';
import BikeImg from '../assets/drivingLessons/bike.png';
import BusImg from '../assets/drivingLessons/bus.png';
import LessonImg from '../assets/drivingLessons/lesson.png';
import ManualImg from '../assets/drivingLessons/mannual.png';
import ThreeImg from '../assets/drivingLessons/three.png';

function DrivingLesson() {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <div className="bg-yellow-500 text-center py-4">
        <h1 className="text-black text-4xl font-bold">Our Driving Lessons</h1>
      </div>

      {/* Section Title */}
      <div className="text-center py-6">
        <h2 className="text-blue-900 text-2xl font-bold">What We Offer</h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
        {/* Auto Car Training */}
        <div className="group bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={AutoImg}
            alt="Auto Car Training"
            className="w-full transform group-hover:scale-105 transition duration-300"
          />
          <div className="bg-black text-yellow-400 text-center py-2 font-bold group-hover:text-yellow-300">
            Auto Car Training
          </div>
        </div>

        {/* Bike Training */}
        <div className="group bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={BikeImg}
            alt="Bike Training"
            className="w-full transform group-hover:scale-105 transition duration-300"
          />
          <div className="bg-black text-yellow-400 text-center py-2 font-bold group-hover:text-yellow-300">
            Bike Training
          </div>
        </div>

        {/* Bus Training */}
        <div className="group bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={BusImg}
            alt="Bus Training"
            className="w-full transform group-hover:scale-105 transition duration-300"
          />
          <div className="bg-black text-yellow-400 text-center py-2 font-bold group-hover:text-yellow-300">
            Bus Training
          </div>
        </div>

        {/* Lesson Training */}
        <div className="group bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={LessonImg}
            alt="Lesson Training"
            className="w-full transform group-hover:scale-105 transition duration-300"
          />
          <div className="bg-black text-yellow-400 text-center py-2 font-bold group-hover:text-yellow-300">
            Road Sign Knowledge
          </div>
        </div>

        {/* Manual Car Training */}
        <div className="group bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={ManualImg}
            alt="Manual Car Training"
            className="w-full transform group-hover:scale-105 transition duration-300"
          />
          <div className="bg-black text-yellow-400 text-center py-2 font-bold group-hover:text-yellow-300">
            Manual Car Training
          </div>
        </div>

        {/* Three Wheeler Training */}
        <div className="group bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={ThreeImg}
            alt="Three Wheeler Training"
            className="w-full transform group-hover:scale-105 transition duration-300"
          />
          <div className="bg-black text-yellow-400 text-center py-2 font-bold group-hover:text-yellow-300">
            Three Wheeler Training
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrivingLesson;
