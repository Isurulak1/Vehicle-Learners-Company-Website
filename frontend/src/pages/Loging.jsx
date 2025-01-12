import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Loging = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      alert(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className='flex justify-center items-center bg-gray-50'>
      <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full mt-10  mb-10'>
        <h1 className='text-4xl font-semibold text-gray-800 text-center'>Sign In</h1>
        <p className='text-gray-500 font-semibold text-center mt-3'>Whether you're a beginner or looking to enhance your driving skills, we provide expert guidance, personalized training plans, and comprehensive support to ensure your success.</p>
        {error && (
          <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-300 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className='mt-6 '>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-sm font-medium text-gray-700'> E-mail <span className="text-red-500">*</span></label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm' placeholder='Enter Your Email or username ' required />
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className='block text-sm font-medium text-gray-700'> Password <span className="text-red-500">*</span></label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm' placeholder='Enter Your password ' required />
          </div>
          <div>
            <p className='ml-2 block text-sm text-gray-700'>Create New account <Link to='/signUp' className='text-blue-600 underline hover:text-red-700 cursor-pointer'>here.</Link></p>
          </div>
          <div className=' mt-6 mb-4'>
            <button type='submit' className='w-full bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-yellow-500 '>
              LOGIN
            </button>
          </div>
          <p className='text-center text-gray-600 '>
            <a href="" className=' text-sm text-blue-440 hover:underline underline hover:text-red-700'>Forgot your password</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Loging