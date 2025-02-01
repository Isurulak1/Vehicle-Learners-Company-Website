import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    address: '',
    city: '',
    gender: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Ensures correct field updates
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload
    setErrors({});
    setMessage('');

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/users/create', formData);
      console.log('Signup Successful:', response.data);

      ('Signup successful! Redirecting to login...');

      console.log(formData);
      setFormData({
        username: '',
        email: '',
        address: '',
        city: '',
        gender: '',
        password: '',
        confirmPassword: '',
      });

      // Redirect after success
      setTimeout(() => {
       window.location.href = '/login';
     }, 5000);
      
    } catch (error) {
      console.error('Signup Error:', error.response?.data || error.message);
      setErrors({ general: error.response?.data?.message || 'Signup failed. Please try again.' });
    }
  };

  return (
    <div>
      <div className='flex justify-center items-center bg-gray-50'>
        <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full mt-10 mb-10'>
          <h1 className='text-4xl font-semibold text-gray-800 text-center'>Sign Up</h1>
          <p className='text-gray-500 font-semibold text-center mt-3'>Start your journey</p>

          <form onSubmit={handleSubmit} className='mt-6'>
            <div className='mb-4'>
              <label htmlFor="username" className='block text-sm font-medium text-gray-700'>Username</label>
              <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required 
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm'/>
            </div>

            <div className='mb-4'>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required 
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm'/>
            </div>

            <div className='mb-4'>
              <label htmlFor="address" className='block text-sm font-medium text-gray-700'>Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required 
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm'/>
            </div>

            <div className='mb-4'>
              <label htmlFor="city" className='block text-sm font-medium text-gray-700'>City</label>
              <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required 
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm'/>
            </div>

            <div className='mb-4'>
              <label htmlFor="gender" className='block text-sm font-medium text-gray-700'>Gender</label>
              <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required 
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm'>
                <option value="" disabled>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className='mb-4'>
              <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required 
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm'/>
            </div>

            <div className='mb-4'>
              <label htmlFor="confirmPassword" className='block text-sm font-medium text-gray-700'>Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required 
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm'/>
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>

            <div className='mt-6 mb-4'>
              <button type='submit' className='w-full bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-md font-medium'>
                SIGN UP
              </button>
            </div>

            {errors.general && <p className="text-red-500 text-sm text-center">{errors.general}</p>}
            {message && <p className="text-green-500 text-sm text-center">{message}</p>}

            <p className='text-center text-gray-600'>
              <Link to="/login" className='text-sm text-blue-440 hover:underline hover:text-red-700'>Already have an account?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
