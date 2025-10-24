// src/components/Navber.jsx
import React, { useContext } from 'react';
import logoImg from '../assets/4934139.jpg';
import { NavLink } from 'react-router';
import { AuthContext } from '../providers/AuthProvider';

// 🆕 Toast Import
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navber = () => {
  const { user, logout } = useContext(AuthContext);

  // 🆕 Logout handler with toast
  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success('Logged out successfully!');
      })
      .catch(error => {
        console.error(error);
        toast.error('Logout failed!');
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-sm">
        {/* Logo */}
        <NavLink to="/">
          <div className="flex items-center gap-4">
            <img className="w-13 h-12 rounded-2xl" src={logoImg} alt="logo" />
            <h1 className="text-2xl font-bold text-indigo-600">
              Trade<span className="text-orange-500">Skill</span>
            </h1>
          </div>
        </NavLink>

        {/* Nav Links */}
        {user ? (
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
                to="/skill"
                className={({ isActive }) =>
                  isActive ? 'text-orange-500 font-semibold' : 'text-gray-700'
                }
              >
                Explore Skills
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? 'text-orange-500 font-semibold' : 'text-gray-700'
                }
              >
                Profile
              </NavLink>
            </li>
          </ul>
        ) : (
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
                to="/skill"
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
        )}

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {/* 🆕 User Avatar */}
              <div className="relative group">
                {/* User Avatar */}
                <img
                  src={
                    user?.photoURL ||
                    'https://i.ibb.co/5r7Yt7P/default-user.png'
                  }
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-orange-400 cursor-pointer"
                />

                {/* 🟢 Active Green Dot */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>

                {/* Tooltip (Hover Name) */}
                <span className="absolute left-1/2 -translate-x-1/2 mt-10 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {user?.displayName || 'User'}
                </span>
              </div>

              {/* 🆕 Logout Button */}
              <button
                onClick={handleLogOut}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-orange-100"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              {/* 🆕 Login & Signup */}
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
            </>
          )}
        </div>
      </nav>

      {/* 🆕 ToastContainer added */}
      <ToastContainer />
    </div>
  );
};

export default Navber;
