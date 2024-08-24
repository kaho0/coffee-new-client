import React from "react";
import { Link } from "react-router-dom";
import coffeeImage from "../../more/3.png"; // Adjust the path to your image

const Header = () => {
  return (
    <header className="relative">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full p-4 bg-opacity-75 bg-gray-800 text-white flex justify-between items-center z-10">
        <div className="text-lg font-semibold">
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/signup" className="hover:text-yellow-500">
            Sign Up
          </Link>
          <Link to="/login" className="hover:text-yellow-500">
            Login
          </Link>
          <Link to="/users" className="hover:text-yellow-500">
            Users
          </Link>
        </div>
      </nav>

      {/* Header Content */}
      <div
        className="bg-cover bg-center h-96 flex items-end justify-end transition-transform duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${coffeeImage})`,
          filter: "brightness(75%)",
          margin: 0,
          padding: 0,
        }}
      >
        <div className="text-white p-6 md:p-10 max-w-lg text-right">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight drop-shadow-lg">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-sm md:text-lg mb-4 drop-shadow-lg">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgic taste! Your companion of every moment! Enjoy the beautiful
            moments and make them memorable.
          </p>
          <button className="bg-yellow-700 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
