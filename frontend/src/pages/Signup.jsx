import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

  const [formData,SetFormData] = useState({
    username: '',
    email: '',
    address: '',
    city: '',
    gender: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    SetFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div>
      <div className='flex justify-center items-center bg-gray-50'>
        <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full mt-10  mb-10'>
          <h1 className='text-4xl font-semibold text-gray-800 text-center'>Sign Up</h1>
          <p className='text-gray-500 font-semibold text-center mt-3'>Start your journey</p>

          <form onSubmit={handleSubmit} className='mt-6 '>
            <div className='mb-4'>
              <label htmlFor="username" className='block text-sm font-medium text-gray-700'>Username <span className="text-red-500">*</span></label>
              <input type="username" id="username" value={formData.username} onChange={handleChange} className='mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm' placeholder='Enter Your username ' required />
            </div>
            <div className='mb-4'>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700'> E-mail <span className="text-red-500">*</span></label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className='mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm' placeholder='Enter Your E-mail ' required />
            </div>
            <div className='mb-4'>
              <label htmlFor="Address" className='block text-sm font-medium text-gray-700'> Address <span className="text-red-500">*</span></label>
              <input type="text" id="Address" name='address' value={formData.address} onChange={handleChange} className='mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm' placeholder='Enter Your Address '/>
            </div>
            <div className='mb-4'>
              <label htmlFor="city" className='block text-sm font-medium text-gray-700'> City <span className="text-red-500">*</span></label>
              <input type="city" id="city" value={formData.city} onChange={handleChange} className='mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm' placeholder='Enter City' required />
            </div>
            <div className='mb-4'>
              <label htmlFor="gender" className='block text-sm font-medium text-gray-700'> Gender <span className="text-red-500">*</span></label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm'
                required
              >
                <option value="" disabled selected>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className='mb-4'>
              <label htmlFor="password" className='block text-sm font-medium text-gray-700'> Password <span className="text-red-500">*</span></label>
              <input type="password" id="password" value={formData.password} onChange={handleChange} className='mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm' placeholder='Enter Password ' required />
            </div>
            <div className='mb-4'>
              <label htmlFor="confirmPassword" className='block text-sm font-medium text-gray-700'> Confirm Password <span className="text-red-500">*</span></label>
              <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm' placeholder='Re-enter your password' required/>
            </div>
            <div className=' mt-6 mb-4'>
              <button type='submit' className='w-full bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-yellow-500 '>
                SIGN UP
              </button>
            </div>
            <p className='text-center text-gray-600 '>
              <Link to="/login" className=' text-sm text-blue-440 hover:underline underline hover:text-red-700'>Already have account?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup