import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Eye, EyeOff } from 'lucide-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Firebase.config';
import { toast } from 'react-toastify';

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    form.reset();

    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        navigate(`${location.state ? location.state : '/'}`);
        toast.success('Login SuccessFull');
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
        <h2 className="text-3xl font-bold text-center text-white mb-6 drop-shadow-lg">
          Welcome Back 💫
        </h2>
        <p className="text-center text-white/70 mb-6">
          Log in to continue your TradeSkill journey
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-white text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
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
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
              required
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-9 text-white/70 hover:text-white transition"
            >
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Gradient Button with animation */}
          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-2 rounded-xl shadow-lg hover:shadow-pink-500/40 transform hover:scale-105 transition-all duration-300 ease-out"
          >
            Login
          </button>

          {/* Divider */}
          <div className="text-center text-white/80 mt-4">
            New to TradeSkill?{' '}
            <Link
              to="/auth/register"
              className="text-yellow-300 hover:text-yellow-200 font-semibold transition-colors"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
