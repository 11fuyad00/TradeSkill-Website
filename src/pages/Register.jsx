import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Eye, EyeOffIcon } from 'lucide-react';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase/Firebase.config';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState('');

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    //  Password Validation
    if (!/[A-Z]/.test(password)) {
      setPasswordError('Password must include at least 1 uppercase letter.');
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError('Password must include at least 1 lowercase letter.');
      return;
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }

    setPasswordError(''); //

    //  Create User
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        // Update displayName & photoURL
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo || '',
        })
          .then(() => {
            toast.success('Sign Up Successful!');
            navigate('/');
          })
          .catch(err => {
            console.error('Profile update failed:', err);
            toast.error('Profile update failed!');
          });
      })
      .catch(error => {
        console.log(error.message);
        toast.error('Error: ' + error.message);
      });
  };

  //  Google Sign-in
  const handleGoogleSignUp = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log('Google Sign-in User:', result.user);
        toast.success('Logged in with Google!');
        navigate('/');
      })
      .catch(error => {
        console.error(error.message);
        toast.error('Google Sign-in Failed: ' + error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5">
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
          <div className="relative">
            <label className="block text-white text-sm font-semibold mb-1">
              Password
            </label>
            <input
              type={showPass ? 'text' : 'password'}
              name="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />

            {/* Eye Button */}
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-9 text-white/70 hover:text-white transition"
            >
              {showPass ? <EyeOffIcon size={20} /> : <Eye size={20} />}
            </button>

            {passwordError && (
              <p className="text-white text-sm mt-1">{passwordError}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-2 rounded-xl shadow-lg hover:shadow-pink-500/40 transform hover:scale-105 transition-all duration-300 ease-out"
          >
            Sign Up
          </button>

          {/* OR Divider */}
          <div className="flex items-center justify-center text-white/70 mt-4">
            <span className="border-b border-white/30 w-1/4"></span>
            <span className="px-3">or</span>
            <span className="border-b border-white/30 w-1/4"></span>
          </div>

          {/* 🟢 Google Sign-in Button */}
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="flex items-center justify-center gap-3 w-full bg-white text-gray-700 font-semibold py-2 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
          >
            <FcGoogle size={22} />
            Continue with Google
          </button>

          {/* Login Link */}
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
