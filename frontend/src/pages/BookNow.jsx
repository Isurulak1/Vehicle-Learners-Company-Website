import { useState } from "react";
import axios from "axios";

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/appointments", formData);
      setFormData({ name: "", email: "", phone: "", date: "", time: "" });
    } catch (error) {
      console.error("Failed to book appointment.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-400 p-6">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg p-10">
        <h2 className="text-4xl font-bold text-center text-gray-900">Book Your Appointment</h2>
        <p className="text-center text-lg text-gray-700 mb-8">Schedule your training session with ease!</p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-400"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-400"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-400"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition shadow-lg"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
      <footer className="text-center p-6 mt-6 bg-gray-900 text-white w-full rounded-lg">
        <p className="text-lg">© 2024 Vehicle Learners. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BookNow;
