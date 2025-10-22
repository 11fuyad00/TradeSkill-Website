import React from 'react';

import logoImg from '../assets/4934139.jpg';
import { NavLink } from 'react-router';

const Navber = () => {
  return (
    <div className="w-11/12 mx-auto">
      <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-sm">
        <NavLink to="/">
          <div className="flex items-center gap-4">
            <img className="w-13 h-12 rounded-2xl" src={logoImg} alt="" />
            <h1 className="text-2xl font-bold text-indigo-600">
              Trade<span className="text-orange-500">Skill</span>
            </h1>
          </div>
        </NavLink>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold' : 'text-gray-700'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold' : 'text-gray-700'
              }
            >
              Explore Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold' : 'text-gray-700'
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>

        <div className="space-x-4">
          <NavLink
            to="/auth/login"
            className={({ isActive }) =>
              isActive
                ? 'bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg'
                : 'bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-orange-100'
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/auth/register"
            className={({ isActive }) =>
              isActive
                ? 'bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg'
                : 'bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-orange-100'
            }
          >
            Sign Up
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
