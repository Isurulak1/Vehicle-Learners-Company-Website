import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';

const Loging = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Handle form data changes (email and password)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission (login)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    console.log('Form Data:', formData); // Log the form data for debugging

    try {
      // Send login request with formData (email & password)
      const response = await axios.post('http://localhost:3000/auth/login', formData);
      console.log('Response:', response.data);

      //localStorage.setItem('token', response.data.token); // Store token in local storage
      //alert(response.data.message); // Show success message

      setMessage(response.data.message || 'Login successful');

      // Reset form data after successful login
      setFormData({
        email: '',
        password: '',
      });
      
      console.log("Navigating to /driving-lesson...");   //I just need to confirm is it working or not 
      navigate('/driving-lesson');

    } catch (err) {
      //setError(err.response?.data?.message || 'Login failed'); // Handle error

      console.error('Login Error:', err.response?.data); // Log error details
      setError(err.response?.data?.message || 'Login failed'); // Handle error
    }
  };

  return (
    
    <div className='flex justify-center items-center bg-gray-50'>
      <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full mt-10  mb-10'>
        <h1 className='text-4xl font-semibold text-gray-800 text-center'>Sign In</h1>
        <p className='text-gray-500 font-semibold text-center mt-3'>
          Whether you're a beginner or looking to enhance your driving skills, we provide expert guidance, personalized training plans, and comprehensive support to ensure your success.
        </p>

         {/* Display error message */}
         {error && (
          <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-300 rounded text-center">
            {error}
          </div>
        )}

        {/* Display success message */}
        {message && (
          <div className="mt-4 p-3 text-green-700 bg-green-100 border border-green-300 rounded text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className='mt-6 '>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-sm font-medium text-gray-700'> E-mail <span className="text-red-500">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm'
              placeholder='Enter Your Email or username '
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className='block text-sm font-medium text-gray-700'> Password <span className="text-red-500">*</span></label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm'
              placeholder='Enter Your password '
              required
            />
          </div>
          <div>
            <p className='ml-2 block text-sm text-gray-700'>
              Create New account <Link to='/signUp' className='text-blue-600 underline hover:text-red-700 cursor-pointer'>here.</Link>
            </p>
          </div>
          <div className=' mt-6 mb-4'>
            <button
              type='submit'
              className='w-full bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-yellow-500 '
            >
              LOGIN
            </button>
          </div>
          <p className='text-center text-gray-600 '>
            <a href="" className=' text-sm text-blue-440 hover:underline underline hover:text-red-700'>Forgot your password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Loging;
