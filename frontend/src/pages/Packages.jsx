import React from "react";
import { CheckCircle, Star, ShieldCheck, Clock } from "lucide-react";

import heavyImg from "../assets/drivingLessons/heavy.jpg";
import PrimeImg from "../assets/drivingLessons/prime.jpg";
import ManualCarImg from "../assets/drivingLessons/manuall.jpg";
import AutoImg from "../assets/drivingLessons/autocar.webp";
import ThreeWheelImg from "../assets/drivingLessons/threewheel.jpg";
import BikeImg from "../assets/drivingLessons/motorcycle.jpg";


const packages = [
  {
    title: "Prime Mover Package",
    price: "LKR 20,000",
    lessons: "Custom Lessons",
    features: ["Advanced driving skills", "Heavy vehicle handling", "Road safety training", "Mock driving test"],
    img: PrimeImg,
  },
  {
    title: "Heavy Vehicle Package",
    price: "LKR 13,000",
    lessons: "Custom Lessons",
    features: ["Heavy vehicle handling", "Traffic rules & road safety", "Vehicle provided", "Professional training"],
    img: heavyImg,
  },
  {
    title: "Manual Car Package",
    price: "LKR 11,000",
    lessons: "Custom Lessons",
    features: ["Manual transmission driving", "Road safety & traffic rules", "Emergency handling skills", "Vehicle provided"],
    img: ManualCarImg,
  },
  {
    title: "Auto Car Package",
    price: "LKR 13,000",
    lessons: "Custom Lessons",
    features: ["Automatic transmission driving", "Traffic rules & road safety", "Vehicle provided", "One-on-one instructor"],
    img: AutoImg,
  },
  {
    title: "Three-Wheel Package",
    price: "LKR 6,500",
    lessons: "Custom Lessons",
    features: ["Three-wheel driving techniques", "Passenger safety training", "Traffic & road safety", "Vehicle provided"],
    img: ThreeWheelImg,
  },
  {
    title: "Motorcycle Package",
    price: "LKR 5,500",
    lessons: "Custom Lessons",
    features: ["Basic riding techniques", "Traffic rules & safety", "One-on-one instructor", "Safety gear provided"],
    img: BikeImg,
  }
];
const lessonPackages = [
    { lesson: "Prime mover", price: "LKR 20,000" },
    { lesson: "Heavy vehicle", price: "LKR 13,000" },
    { lesson: "Car/van manual", price: "LKR 11,000" },
    { lesson: "Car (auto)", price: "LKR 13,000" },
    { lesson: "Three wheel", price: "LKR 6,500" },
    { lesson: "Motorcycle", price: "LKR 5,500" },
    { lesson: "Heavy vehicle + motorcycle", price: "LKR 17,000" },
    { lesson: "Car + Three wheeler + motorcycle", price: "LKR 20,000" },
    { lesson: "Car + motorcycle", price: "LKR 15,000" },
    { lesson: "Car + Three wheeler", price: "LKR 16,000" },
    { lesson: "Three wheeler + motorcycle", price: "LKR 10,500" },
    { lesson: "Heavy vehicle + without motorcycle lessons", price: "LKR 15,000" },
    { lesson: "Car + Without three wheeler & motorcycle lesson", price: "LKR 15,000" },
    { lesson: "Car + Without three wheeler lesson", price: "LKR 13,500" },
    { lesson: "Car + Without motorcycle lesson", price: "LKR 13,000" },
    { lesson: "Heavy vehicle (Half an hour)", price: "LKR 700" },
    { lesson: "Car / van manual (Half an hour)", price: "LKR 600" },
    { lesson: "Car (auto) (Half an hour)", price: "LKR 800" },
    { lesson: "Three wheel (Half an hour)", price: "LKR 400" },
    { lesson: "Motorcycle (Half an hour)", price: "LKR 300" }
];

const medicalCharges = [
    { category: "Car / van / threewheel / motorcycle", price: "LKR 750" },
    { category: "Heavy vehicle", price: "LKR 1,250" }
];

const governmentCharges = [
    { category: "Heavy vehicle", price: "LKR 2,000" },
    { category: "Car / Van", price: "LKR 2,000" },
    { category: "Three wheel", price: "LKR 2,000" },
    { category: "Motorcycle", price: "LKR 1,850" },
    { category: "Heavy vehicle + Motorcycle", price: "LKR 2,450" },
    { category: "Car + Threewheel + Motorcycle", price: "LKR 2,700" },
    { category: "Car + Threewheel", price: "LKR 2,300" },
    { category: "Car + Motorcycle", price: "LKR 2,450" }
];

const essentialDocuments = [
    "Original Birth Certificate",
    "Original National Identity Card",
    "Medical"
];


const Packages = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-yellow-500 text-center py-6 shadow-md">
        <h1 className="text-black text-4xl font-bold">Vehicle Training Packages</h1>
      </div>

      {/* Section Title */}
      <div className="text-center py-8">
        <h2 className="text-blue-900 text-3xl font-bold">Choose the Best Plan for You</h2>
        <p className="text-gray-600 mt-2">Expert training, flexible schedules, and affordable pricing.</p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {packages.map((pkg, index) => (
          <div key={index} className="group bg-white shadow-lg rounded-xl overflow-hidden transition hover:shadow-2xl">
            {/* Package Image */}
            <img src={pkg.img} alt={pkg.title} className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300" />
            {/* Package Title */}
            <div className="bg-blue-900 text-yellow-300 text-center py-3 font-bold text-lg group-hover:text-yellow-400">{pkg.title}</div>
            {/* Package Details */}
            <div className="p-6 text-center">
              <p className="text-gray-700 text-lg">{pkg.lessons}</p>
              <p className="text-3xl font-bold text-blue-700 mt-2">{pkg.price}</p>
              {/* Features List */}
              <ul className="mt-4 space-y-2 text-left">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-500" /> {feature}
                  </li>
                ))}
              </ul>
              {/* CTA Button */}
              <button className="mt-6 w-full bg-yellow-500 text-black py-3 font-bold rounded-lg hover:bg-yellow-600 transition">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Lessons Table */}
<div className="px-10 py-8">
  {/* Lessons Table */}
  <div className="overflow-hidden rounded-lg shadow-lg">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-blue-900 text-white">
          <th className="p-3 text-left">Lesson</th>
          <th className="p-3 text-left">Price</th>
        </tr>
      </thead>
      <tbody>
        {lessonPackages.map((pkg, index) => (
          <tr key={index} className="bg-white even:bg-gray-100 hover:bg-gray-200 transition">
            <td className="p-3 border-b">{pkg.lesson}</td>
            <td className="p-3 border-b">{pkg.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Medical Charges Table */}
  <div className="overflow-hidden rounded-lg shadow-lg mt-6">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-red-600 text-white">
          <th className="p-3 text-left">Medical Charges</th>
          <th className="p-3 text-left">Price</th>
        </tr>
      </thead>
      <tbody>
        {medicalCharges.map((item, index) => (
          <tr key={index} className="bg-white even:bg-gray-100 hover:bg-gray-200 transition">
            <td className="p-3 border-b">{item.category}</td>
            <td className="p-3 border-b">{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Government Charges Table */}
  <div className="overflow-hidden rounded-lg shadow-lg mt-6">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-green-700 text-white">
          <th className="p-3 text-left">Government Charges</th>
          <th className="p-3 text-left">Price</th>
        </tr>
      </thead>
      <tbody>
        {governmentCharges.map((item, index) => (
          <tr key={index} className="bg-white even:bg-gray-100 hover:bg-gray-200 transition">
            <td className="p-3 border-b">{item.category}</td>
            <td className="p-3 border-b">{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Essential Documents List */}
  <div className="mt-8 p-5 bg-gray-100 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold text-gray-800 mb-3">Essential Documents</h2>
    <ul className="list-disc pl-5 text-gray-700">
      {essentialDocuments.map((doc, index) => (
        <li key={index} className="mb-1">{doc}</li>
      ))}
    </ul>
  </div>
</div>

    </div>
  );
};

export default Packages;