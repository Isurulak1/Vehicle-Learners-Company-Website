import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Car, CheckCircle, Clock } from 'lucide-react';
import dashbord from  '../assets/dashboard.jpg'

const features = [
  {
    name: 'Comprehensive Study Materials',
    description: 'Access a wide range of up-to-date study materials covering all aspects of vehicle licensing exams.',
    icon: BookOpen,
  },
  {
    name: 'Practice Tests',
    description: 'Take unlimited practice tests to familiarize yourself with the exam format and improve your scores.',
    icon: CheckCircle,
  },
  {
    name: 'Real-time Simulations',
    description: 'Experience real-time driving simulations to prepare for practical driving tests.',
    icon: Car,
  },
  {
    name: 'Flexible Learning',
    description: 'Study at your own pace with our flexible learning modules designed to fit your schedule.',
    icon: Clock,
  },
];

const testimonials = [
  {
    name: 'Emily Chen',
    role: 'First-time Driver',
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg',
    quote: "Nandana Learner's practice tests were incredibly helpful. I passed my written exam on the first try!",
  },
  {
    name: 'Michael Johnson',
    role: 'Commercial Driver',
    imageUrl: 'https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?rs=1&pid=ImgDetMain',
    quote: "The real-time simulations prepared me well for the practical test. I felt confident throughout the exam.",
  },
  {
    name: 'Sarah Thompson',
    role: 'Returning Driver',
    imageUrl: 'https://i1.rgstatic.net/ii/profile.image/11431281083301546-1662536564491_Q512/Alexander-Grueter-2.jpg',
    quote: "After not driving for years, the comprehensive study materials helped me refresh my knowledge quickly.",
  },
  {
    name: 'isuru',
    role: 'Returning Driver',
    imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    quote: "After not driving for years, the comprehensive study materials helped me refresh my knowledge quickly.",
  },
];

const Feature = ({ icon: Icon, name, description }) => (
  <div
    className="flex flex-col bg-gray-100 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300"
    role="group"
  >
    <dt className="flex items-center gap-x-3 text-lg font-semibold text-gray-900">
      <Icon className="h-7 w-7 text-indigo-600" aria-hidden="true" />
      {name}
    </dt>
    <dd className="mt-3 text-gray-600 text-sm leading-relaxed">
      {description}
    </dd>
  </div>
);


const Testimonial = ({ name, role, imageUrl, quote }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl transition-transform transform hover:scale-105 duration-300">
    <img className="w-24 h-24 rounded-full object-cover shadow-md" src={imageUrl} alt={`${name}'s testimonial`} />
    <p className="mt-4 text-lg font-semibold text-gray-900">{name}</p>
    <p className="text-sm text-indigo-600 font-medium">{role}</p>
    <p className="mt-3 text-base italic text-gray-600 max-w-md">"{quote}"</p>
  </div>
);

const CallToAction = () => (
  <div className="relative isolate overflow-hidden bg-indigo-600 text-white px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32 text-center">
    <h2 className="text-3xl font-bold sm:text-4xl">Ready to start your journey?</h2>
    <p className="mt-2 text-lg">Join thousands of successful learners and get your vehicle license with confidence.</p>
    <form className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <input
        type="email"
        required
        className="w-full max-w-xs rounded-md border-0 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-400"
        placeholder="Enter your email"
      />
      <button className="rounded-md bg-white text-indigo-600 px-4 py-2 font-semibold shadow hover:bg-gray-100">
        Get Started
      </button>
    </form>
  </div>
);

export default function HomeContent() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Exam Preparation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get Ready for Your Vehicle License Exam
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nandana Learner provides comprehensive resources and tools to help you prepare for and pass your vehicle license examination with confidence.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <Feature key={feature.name} {...feature} />
            ))}
          </dl>
        </div>
        <div className="mt-16 flex justify-center">
          <Link
            href="/vehicle-license-prep"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Start Your Preparation
          </Link>
        </div>
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src={dashbord}
            alt="Vehicle license preparation dashboard"
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Success Stories</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from our students who have successfully obtained their vehicle licenses using our preparation resources.
          </p>
          <div className="mt-16 grid max-w-6xl mx-auto gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.name} {...testimonial} />
            ))}
          </div>

        </div>
        <CallToAction />
      </div>
    </div>
  );
}
