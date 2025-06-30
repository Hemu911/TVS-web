import React from 'react';
import Navbar from '../Components/Navbar';

const Destination = () => {
  return (
    <div>
      <Navbar title="" />

      <div className="mt-10 px-8">
        <h1 className="text-3xl font-bold text-center mb-6">Popular Destinations</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/images/pokhara.jpg" alt="Pokhara" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Pokhara</h2>
              <p className="text-gray-700">Famous for lakes, adventure sports, and scenic mountain views.</p>
            </div>
          </div>

          {/* Example Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/images/lumbini.jpg" alt="Lumbini" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Lumbini</h2>
              <p className="text-gray-700">Birthplace of Lord Buddha and a major pilgrimage site.</p>
            </div>
          </div>

          {/* Example Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/images/mustang.jpg" alt="Mustang" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Mustang</h2>
              <p className="text-gray-700">Known for its desert-like landscapes and unique culture.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
