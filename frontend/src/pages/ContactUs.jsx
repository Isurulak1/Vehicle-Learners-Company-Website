import { useState } from "react";
import axios from "axios";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/contact", formData);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send message.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-400 p-6">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-lg p-10">
        <h2 className="text-4xl font-bold text-center text-gray-900">We'd Love to Hear from You!</h2>
        <p className="text-center text-lg text-gray-700 mb-8">Reach out with your questions, feedback, or just to say hello!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
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
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border rounded-lg focus:ring focus:ring-blue-400"
                rows="5"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
            <p className="flex items-center gap-3 mt-3 text-gray-700 text-lg"><FaMapMarkerAlt /> 123 Driving School, City</p>
            <p className="flex items-center gap-3 mt-3 text-gray-700 text-lg"><FaPhone /> +94 77 123 4567</p>
            <p className="flex items-center gap-3 mt-3 text-gray-700 text-lg"><FaEnvelope /> support@vehiclelearners.com</p>
          </div>
        </div>

        {/* Team Contact */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "John Doe", role: "Customer Support", phone: "+94 77 111 2222" },
            { name: "Jane Smith", role: "Technical Assistance", phone: "+94 77 333 4444" },
            { name: "Michael Lee", role: "Instructor Support", phone: "+94 77 555 6666" },
          ].map((member, index) => (
            <div key={index} className="p-6 bg-gray-200 rounded-lg text-center shadow-lg">
              <h4 className="font-bold text-gray-900 text-xl">{member.name}</h4>
              <p className="text-gray-700 text-lg">{member.role}</p>
              <p className="text-blue-600 font-semibold text-lg">📞 {member.phone}</p>
            </div>
          ))}
        </div>

        {/* Guidelines */}
        <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="font-bold text-gray-900 text-xl">Guidelines:</h3>
          <ul className="list-disc ml-6 text-gray-700 text-lg">
            <li>Ensure your message is clear and precise.</li>
            <li>We will respond within 24-48 hours.</li>
            <li>For urgent matters, please call us.</li>
          </ul>
        </div>
      </div>
      {/* Footer */}
      <footer className="text-center p-6 mt-6 bg-gray-900 text-white w-full rounded-lg">
        <p className="text-lg">© 2024 Vehicle Learners. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;