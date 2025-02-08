import React, { useState } from "react";

// Import images
import AutoImg from "../assets/drivingLessons/auto.png";
import BikeImg from "../assets/drivingLessons/bike.png";
import BusImg from "../assets/drivingLessons/bus.png";
import LessonImg from "../assets/drivingLessons/lesson.png";
import ManualImg from "../assets/drivingLessons/mannual.png";
import ThreeImg from "../assets/drivingLessons/three.png";

const DrivingLesson = () => {
  // Hardcoded data for "John Doe" with exactly 10 rows
  const johnsSchedule = [
    { vehicleType: "Auto Car", vehicleNumber: "AB-1001", date: "2025-02-10", time: "10:00 AM", location: "Colombo Center" },
    { vehicleType: "Bike", vehicleNumber: "BC-2002", date: "2025-02-11", time: "09:30 AM", location: "Colombo Center" },
    { vehicleType: "Bus", vehicleNumber: "DE-3003", date: "2025-02-12", time: "02:00 PM", location: "Galle Road" },
    { vehicleType: "Three Wheeler", vehicleNumber: "FG-4004", date: "2025-02-13", time: "08:00 AM", location: "Colombo Center" },
    { vehicleType: "Van", vehicleNumber: "HI-5005", date: "2025-02-14", time: "01:00 PM", location: "Colombo Center" },
    { vehicleType: "Wheel", vehicleNumber: "JK-6006", date: "2025-02-15", time: "04:00 PM", location: "Galle Road" },
    { vehicleType: "Bike", vehicleNumber: "LM-7007", date: "2025-02-16", time: "11:00 AM", location: "Galle Road" },
    { vehicleType: "Bus", vehicleNumber: "NO-8008", date: "2025-02-17", time: "07:00 AM", location: "Galle Road" },
    { vehicleType: "Wheel", vehicleNumber: "PQ-9009", date: "2025-02-18", time: "03:30 PM", location: "Colombo Center" },
    { vehicleType: "Van", vehicleNumber: "RS-1010", date: "2025-02-19", time: "12:00 PM", location: "Colombo Center" },
  ];

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
        {[
          { img: AutoImg, title: "Auto Car Training" },
          { img: BikeImg, title: "Bike Training" },
          { img: BusImg, title: "Bus Training" },
          { img: LessonImg, title: "Road Sign Knowledge" },
          { img: ManualImg, title: "Manual Car Training" },
          { img: ThreeImg, title: "Three Wheeler Training" },
        ].map((item, index) => (
          <div key={index} className="group bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.img} alt={item.title} className="w-full transform group-hover:scale-105 transition duration-300" />
            <div className="bg-black text-yellow-400 text-center py-2 font-bold group-hover:text-yellow-300">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Display "John Doe" Assigned Vehicle & Schedule */}
      <div className="mt-10 max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-gray-200">
        <h3 className="text-2xl font-bold mb-5 text-gray-800">
          🚗 Vehicle Schedule for <span className="text-blue-600">John Doe</span>
        </h3>

        <div className="overflow-x-auto rounded-lg">
          <table className="w-full border border-gray-300 rounded-lg shadow-md">
            {/* Table Head */}
            <thead className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-left sticky top-0">
              <tr>
                <th className="p-4 border-b border-gray-300">🚙 Vehicle Type</th>
                <th className="p-4 border-b border-gray-300">🔢 Vehicle Number</th>
                <th className="p-4 border-b border-gray-300">📅 Date</th>
                <th className="p-4 border-b border-gray-300">⏰ Time</th>
                <th className="p-4 border-b border-gray-300">📍 Location</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {johnsSchedule.map((schedule, index) => (
                <tr
                  key={index}
                  className={`text-gray-700 text-md border-b border-gray-200 transition-all ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-blue-100 hover:scale-[1.02]`}
                >
                  <td className="p-4">{schedule.vehicleType}</td>
                  <td className="p-4">{schedule.vehicleNumber}</td>
                  <td className="p-4">{schedule.date}</td>
                  <td className="p-4">{schedule.time}</td>
                  <td className="p-4">{schedule.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


    </div>
  );
};

export default DrivingLesson;
