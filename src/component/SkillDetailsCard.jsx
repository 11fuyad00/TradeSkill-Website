import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Star } from 'lucide-react';
import { toast } from 'react-toastify';

const SkillDetailsCard = ({ skill }) => {
  const [booking, setBooking] = useState({
    name: '',
    email: '',
    date: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setBooking(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    toast.success(`Booking Confirmed for ${booking.name} on ${booking.date}!`);
    setBooking({ name: '', email: '', date: '' });
  };

  return (
    <div className="grid md:grid-cols-2 gap-10 w-11/12 mx-auto py-16 items-start">
      {/* Left Side - Skill Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-500"
      >
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-80 object-cover rounded-t-3xl"
        />
        <div className="p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {skill.skillName}
          </h2>
          <div className="flex items-center justify-between mb-4 text-gray-600">
            <p className="flex items-center gap-2 text-lg">
              <User size={20} /> {skill.providerName}
            </p>
            <p className="flex items-center gap-2 text-yellow-500 font-semibold text-lg">
              <Star size={20} /> {skill.rating}
            </p>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {skill.description}
          </p>
          <div className="flex justify-between items-center mt-6">
            <span className="text-2xl font-bold text-indigo-600">
              ${skill.price} / session
            </span>
            <span className="text-sm text-gray-500">
              {skill.slotsAvailable} slots left
            </span>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Booking Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl shadow-xl p-10"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Book Your Session
        </h3>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative group">
            <input
              type="text"
              name="name"
              value={booking.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-3 px-2 text-gray-700 placeholder-transparent peer"
            />
            <label className="absolute left-2 top-3 text-gray-400 text-sm transition-all duration-300 group-focus-within:-top-2 group-focus-within:text-indigo-500 group-focus-within:text-xs">
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative group">
            <input
              type="email"
              name="email"
              value={booking.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-3 px-2 text-gray-700 placeholder-transparent peer"
            />
            <label className="absolute left-2 top-3 text-gray-400 text-sm transition-all duration-300 group-focus-within:-top-2 group-focus-within:text-indigo-500 group-focus-within:text-xs">
              Email
            </label>
          </div>

          {/* Date */}
          <div className="relative group flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500 py-2">
            <Calendar size={20} className="text-gray-400 mr-2" />
            <input
              type="date"
              name="date"
              value={booking.date}
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Confirm Booking
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SkillDetailsCard;
