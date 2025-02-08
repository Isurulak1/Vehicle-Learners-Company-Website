import { Link } from 'react-router-dom'
import React from 'react'

const InstructerLogin = () => {
    return (
        <div className='flex justify-center items-center bg-gray-50'>
            <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full mt-10  mb-10'>
                <h1 className='text-4xl font-semibold text-gray-800 text-center'>Sign In</h1>
                <p className='text-gray-500 font-semibold text-center mt-3'>We strive to equip our instructors with the skills, tools, and support needed to excel. By fostering growth and confidence, we enable them to deliver exceptional training and inspire the next generation of safe, capable drivers.</p>

                <form action="" className='mt-6 '>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700'> User ID <span className="text-red-500">*</span></label>
                        <input type="email" id="email" className='mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm' placeholder='Enter Your Email or username ' required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className='block text-sm font-medium text-gray-700'> Password <span className="text-red-500">*</span></label>
                        <input type="password" id="password" className='mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm' placeholder='Enter Your password ' required />
                    </div>
                    <div className=' mt-6 mb-4'>
                        <Link to='/instructor' className="block">
                            <button
                                type='submit'
                                className='w-full bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-yellow-500 mt-6 mb-4'>
                                LOGIN
                            </button>
                        </Link>
                    </div>
                    <p className='text-center text-gray-600 '>
                        <a href="" className=' text-sm text-blue-440 hover:underline underline hover:text-red-700'>Forgot your password</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default InstructerLogin