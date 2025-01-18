import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Car, CheckCircle, Clock } from 'lucide-react';

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
    imageUrl: '/placeholder.svg',
    quote: "Nandana Learner's practice tests were incredibly helpful. I passed my written exam on the first try!",
  },
  {
    name: 'Michael Johnson',
    role: 'Commercial Driver',
    imageUrl: '/placeholder.svg',
    quote: "The real-time simulations prepared me well for the practical test. I felt confident throughout the exam.",
  },
  {
    name: 'Sarah Thompson',
    role: 'Returning Driver',
    imageUrl: '/placeholder.svg',
    quote: "After not driving for years, the comprehensive study materials helped me refresh my knowledge quickly.",
  },
];

const Feature = ({ icon: Icon, name, description }) => (
  <div className="flex flex-col">
    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
      <Icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
      {name}
    </dt>
    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
      <p className="flex-auto">{description}</p>
    </dd>
  </div>
);

const Testimonial = ({ name, role, imageUrl, quote }) => (
  <div className="flex flex-col">
    <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={imageUrl} alt="" />
    <div className="mt-6 flex flex-col flex-1">
      <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{name}</p>
      <p className="text-base leading-7 text-gray-600">{role}</p>
      <p className="mt-4 text-base italic leading-7 text-gray-600">"{quote}"</p>
    </div>
  </div>
);

const CallToAction = () => (
  <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
      Ready to start your journey?
    </h2>
    <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
      Join thousands of successful learners and get your vehicle license with confidence.
    </p>
    <form className="mx-auto mt-10 flex max-w-md gap-x-4">
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
      >
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
            src="/placeholder.svg"
            alt="Vehicle license preparation dashboard"
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Success Stories</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from our students who have successfully obtained their vehicle licenses using our preparation resources.
          </p>
          <div className="mt-16 grid max-w-2xl gap-x-8 gap-y-20 lg:mx-0 lg:grid-cols-3">
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
