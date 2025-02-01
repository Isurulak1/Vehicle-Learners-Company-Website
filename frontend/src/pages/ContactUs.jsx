import { useState } from "react";
import axios from "axios";

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
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center">"We'd Love to Hear from You!"</h2>
      <p className="text-center text-lg text-gray-600 mb-6">Reach out with your questions, feedback, or just to say hello!</p>

      <div className="flex flex-wrap justify-between items-start">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 p-6 bg-gray-100 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="w-full md:w-1/2 p-6">
          <h3 className="text-xl font-bold">Contact Information</h3>
          <p>📍 Address: 123 Driving School, City</p>
          <p>📞 Phone: +94 77 123 4567</p>
          <p>✉️ Email: support@vehiclelearners.com</p>
        </div>
      </div>

      {/* Team Contact */}
      <div className="mt-6 flex flex-wrap justify-around">
        <div className="p-4 bg-gray-200 rounded text-center w-1/3">
          <h4 className="font-bold">John Doe</h4>
          <p>Customer Support</p>
          <p>📞 +94 77 111 2222</p>
        </div>
        <div className="p-4 bg-gray-200 rounded text-center w-1/3">
          <h4 className="font-bold">Jane Smith</h4>
          <p>Technical Assistance</p>
          <p>📞 +94 77 333 4444</p>
        </div>
        <div className="p-4 bg-gray-200 rounded text-center w-1/3">
          <h4 className="font-bold">Michael Lee</h4>
          <p>Instructor Support</p>
          <p>📞 +94 77 555 6666</p>
        </div>
      </div>

      {/* Guidelines */}
      <div className="mt-6 p-4 bg-gray-200 rounded">
        <h3 className="font-bold">Guidelines:</h3>
        <ul className="list-disc ml-5">
          <li>Ensure your message is clear and precise.</li>
          <li>We will respond within 24-48 hours.</li>
          <li>For urgent matters, please call us.</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="text-center p-4 mt-6 bg-gray-800 text-white">
        <p>© 2024 Vehicle Learners. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
