import React from 'react';
import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar title="Tourism Management System" />

      {/* Hero Section */}
      <section className="bg-blue-100 py-16 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-900">Explore the World with Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover new places, unique cultures, and beautiful experiences with our tourism platform.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-amber-900 mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          We provide the best travel experience with curated packages, affordable pricing, and 24/7 customer support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-amber-100 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Best Destinations</h3>
            <p className="text-gray-700">Handpicked places that you'll fall in love with.</p>
          </div>
          <div className="bg-amber-100 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-gray-700">Quality travel at the best price in the market.</p>
          </div>
          <div className="bg-amber-100 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Support Team</h3>
            <p className="text-gray-700">24/7 service ready to assist you anytime.</p>
          </div>
        </div>
      </section>

      {/* Gallery or Tour Highlights */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Top Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img src="https://source.unsplash.com/400x300/?beach" alt="Beach" className="rounded-lg shadow-md" />
          <img src="https://source.unsplash.com/400x300/?mountains" alt="Mountains" className="rounded-lg shadow-md" />
          <img src="https://source.unsplash.com/400x300/?city" alt="City" className="rounded-lg shadow-md" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-white text-center p-6 mt-16">
        <p>&copy; {new Date().getFullYear()} Tourism Management System. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;