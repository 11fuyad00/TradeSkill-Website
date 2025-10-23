import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../firebase/Firebase.config';
import { toast } from 'react-toastify';

const Register = () => {
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ name, photo, email, password });
    form.reset();

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        toast.success('SigUp Successfull');
      })
      .catch(error => {
        console.log(error.message);
        toast.error('Error', error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5">
      {/* Glass Card */}
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-8 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-white text-sm font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-white text-sm font-semibold mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Paste your photo URL"
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-white text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white text-sm font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-2 rounded-xl shadow-lg hover:shadow-pink-500/40 transform hover:scale-105 transition-all duration-300 ease-out"
          >
            Sign Up
          </button>

          {/* Divider */}
          <div className="text-center text-white/80 mt-4">
            Already Have an Account?{' '}
            <Link
              to="/auth/login"
              className="text-yellow-300 hover:text-yellow-200 font-semibold"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
