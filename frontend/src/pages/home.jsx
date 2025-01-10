import React from "react";


const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-blue-500 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center py-12 px-6">
          {/* Search Box */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6 md:w-1/3">
            <h2 className="text-lg font-bold mb-4">Find a Driving Instructor</h2>
            <p className="text-sm mb-4">
              Including availability, pricing & bookings
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Transmission</label>
              <select className="w-full p-2 border rounded">
                <option value="auto">AUTO</option>
                <option value="manual">MANUAL</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Enter your suburb</label>
              <input
                type="text"
                placeholder="Suburb"
                className="w-full p-2 border rounded"
              />
            </div>
            <button className="bg-yellow-500 text-white w-full py-2 rounded font-bold hover:bg-yellow-600">
              Search Now
            </button>
          </div>

          {/* Hero Image and Tagline */}
          <div className="mt-8 md:mt-0 md:ml-12 flex-1 text-center">
            <img
              src="/home(2).jpg" // Replace with your car image path
              alt="Driving School Car"
              className="w-full max-w-lg mx-auto"
            />
            <h1 className="text-3xl font-bold mt-4">The best Driving School in your area</h1>
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Book a driving test package now!</h2>
        <p className="mb-6">Buy more lessons & get more discount</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-yellow-500 text-white py-2 px-6 rounded font-bold hover:bg-yellow-600">
            AUTO
          </button>
          <button className="bg-yellow-500 text-white py-2 px-6 rounded font-bold hover:bg-yellow-600">
            MANUAL
          </button>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-yellow-400 text-black text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Driving Lesson Guarantee!</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded font-bold hover:bg-blue-700">
          Book Now
        </button>
      </section>
    </div>
  );
};

export default Home;

