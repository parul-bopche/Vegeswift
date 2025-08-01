import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Use NavLink for active styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Vegeswift
        </Link>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "text-gray-600 hover:text-green-500 transition-colors duration-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "text-gray-600 hover:text-green-500 transition-colors duration-200"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "text-gray-600 hover:text-green-500 transition-colors duration-200"
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/account"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "text-gray-600 hover:text-green-500 transition-colors duration-200"
            }
          >
            Account
          </NavLink>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Conditionally displayed based on state) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-2 py-2 px-4 bg-gray-100">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold p-2" : "text-gray-600 hover:text-green-500 transition-colors duration-200 p-2"
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold p-2" : "text-gray-600 hover:text-green-500 transition-colors duration-200 p-2"
            }
            onClick={toggleMenu}
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold p-2" : "text-gray-600 hover:text-green-500 transition-colors duration-200 p-2"
            }
            onClick={toggleMenu}
          >
            Cart
          </NavLink>
          <NavLink
            to="/account"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold p-2" : "text-gray-600 hover:text-green-500 transition-colors duration-200 p-2"
            }
            onClick={toggleMenu}
          >
            Account
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;