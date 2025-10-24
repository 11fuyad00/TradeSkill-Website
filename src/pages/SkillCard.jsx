import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navber from '../component/Navber';
import doller from '../assets/doller.png';
import Footer from './Footer';
import { Link } from 'react-router';

const SkillCard = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    fetch('/Skill.json')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(error => console.error('Error loading skills:', error));
  }, []);

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navber />

      {/* Header Section */}
      <div
        className="text-center py-16 bg-white shadow-sm"
        data-aos="fade-down"
      >
        <h2 className="text-4xl font-bold mb-4">
          Explore All <span className="text-orange-500">Skills</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find all the amazing skills shared by our talented community members.
          Learn, grow, and connect through SkillSwap.
        </p>
      </div>

      {/* All Skill Cards */}
      <div className="w-11/12 mx-auto py-16 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, i) => (
          <div
            key={skill.skillId}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h4 className="font-bold text-lg mb-2">{skill.skillName}</h4>
              <p className="text-gray-600 text-sm mb-4">
                With {skill.providerName}
              </p>

              <div className="flex items-center justify-between mb-4">
                <p className="text-orange-500 font-semibold text-xl">
                  ⭐ {skill.rating}
                </p>
                <span className="font-semibold text-xl flex items-center gap-2">
                  <img className="w-6 h-6" src={doller} alt="price" />{' '}
                  {skill.price}
                </span>
              </div>

              <Link to={`/skill-details/${skill.skillId}`}>
                <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Extra bottom section */}
      <div
        className="text-center py-12 bg-gradient-to-r from-orange-400 to-orange-600 text-white"
        data-aos="zoom-in"
      >
        <h3 className="text-3xl font-bold mb-3">
          Ready to <span className="underline">Learn or Teach?</span>
        </h3>
        <p className="mb-6">
          Join thousands of learners and instructors at SkillSwap today.
        </p>
        <button className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
          Join Now
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SkillCard;
