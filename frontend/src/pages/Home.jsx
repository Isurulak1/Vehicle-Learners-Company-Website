import React from 'react';
import VehicleLicensePrep from '../components/HomeContent';

const Home = () => {
  return (
    <>
      <div>
        {/* Header Section */}
        <header className="text-center py-8 bg-gray-100">
          <h1 className="text-3xl font-bold">"Drive With Confidence, Learn With Us!"</h1>
          <p className="mt-4 text-lg">
            Please fill out the below form to get registered and become a part of our Perera Driving
            School family!!
          </p>
          <button className="mt-6 px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Register Online Now
          </button>
        </header>

        {/* Illustration Section */}
        <section className="flex justify-center gap-8 p-8 flex-wrap">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.Wf_9tOxgvVMjlLXSWxtdBAAAAA&pid=Api"
            alt="Driving School Illustration 1"
            className="w-72"
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.pVvRhs-UvTiC5hcdwaW3owHaEn&pid=Api"
            alt="Driving School Illustration 2"
            className="w-72"
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.omkxyy4RUWj19HisN8tGJwHaH6&pid=Api"
            alt="Driving School Illustration 3"
            className="w-72"
          />
        </section>
      </div>

      <div>
        <VehicleLicensePrep />
      </div>
    </>
  );
};

export default Home;


