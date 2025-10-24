import React, { useContext, useState } from 'react';
import logoImg from '../assets/4934139.jpg';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navber = () => {
  const { user, logout } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate(); // 🆕 navigation hook

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

  const goToProfile = () => {
    if (user) navigate('/profile');
  };

  return (
    <div className="w-11/12 mx-auto">
      <nav className="flex justify-between items-center px-4 md:px-10 py-4 bg-white shadow-sm relative">
        {/* Logo */}
        <NavLink to="/">
          <div className="flex items-center gap-4">
            <img className="w-13 h-12 rounded-2xl" src={logoImg} alt="logo" />
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
              to="/skill"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold' : 'text-gray-700'
              }
            >
              Explore Skills
            </NavLink>
          </li>
          {user ? (
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
          ) : (
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
          )}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <div
                className="relative group cursor-pointer"
                onClick={goToProfile}
              >
                <img
                  src={
                    user?.photoURL ||
                    'https://i.ibb.co/5r7Yt7P/default-user.png'
                  }
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-orange-400"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
                <span className="absolute left-1/2 -translate-x-1/2 mt-10 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {user?.displayName || 'User'}
                </span>
              </div>
              <button
                onClick={handleLogOut}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-orange-100"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/auth/login"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg'
                    : 'bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-orange-100'
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/auth/register"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg'
                    : 'bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-orange-100'
                }
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Responsive + Avatar */}
        <div className="md:hidden flex items-center gap-3">
          {user && (
            <div
              className="relative group cursor-pointer"
              onClick={goToProfile}
            >
              <img
                src={
                  user?.photoURL || 'https://i.ibb.co/5r7Yt7P/default-user.png'
                }
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-orange-400"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
            </div>
          )}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col md:hidden z-20">
            <NavLink
              to="/"
              className="px-6 py-3 border-b hover:bg-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/skill"
              className="px-6 py-3 border-b hover:bg-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              Explore Skills
            </NavLink>

            {user ? (
              <>
                <NavLink
                  to="/profile"
                  className="px-6 py-3 border-b hover:bg-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Profile
                </NavLink>
                <button
                  onClick={() => {
                    handleLogOut();
                    setMobileOpen(false);
                  }}
                  className="px-6 py-3 text-left border-b hover:bg-gray-100"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/about"
                  className="px-6 py-3 border-b hover:bg-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/auth/login"
                  className="px-6 py-3 border-b hover:bg-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/auth/register"
                  className="px-6 py-3 border-b hover:bg-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        )}
      </nav>
      <ToastContainer />
    </div>
  );
};

export default Navber;
