import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-white shadow-md">
        <h1 className="text-lg md:text-xl font-bold">Supreme Fitness</h1>
        <div className="flex gap-4 md:gap-6 items-center text-sm md:text-base">
          <a href="#" className="hover:text-red-500 font-medium">
            About Us
          </a>
          <a href="#" className="hover:text-red-500 font-medium">
            Trainers
          </a>
          <a href="#" className="hover:text-red-500 font-medium">
            Membership
          </a>
          <a href="#" className="hover:text-red-500 font-medium">
            Contact
          </a>
          <Link
            to="/login"
            className="bg-red-500 text-white px-3 md:px-4 py-2 rounded-md hover:bg-red-600 text-sm md:text-base"
          >
            Log In
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative w-full h-[80vh] md:h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://api.letsdiskuss.com/resources/static/asset/uploads/1651834372995-workout.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text */}
        <h2 className="relative text-white text-3xl md:text-6xl font-extrabold text-center px-4">
          START YOUR <br className="hidden md:block" /> JOURNEY TODAY
        </h2>
      </div>
    </div>
  );
};

export default Home;