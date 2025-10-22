import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import rightImg from '../assets/5031659.jpg';
import boyImg from '../assets/boy.png';
import doller from '../assets/doller.png';
import { Link } from 'react-router';

const Home = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // JSON file fetch (public/skill.json)
    fetch('/Skill.json')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched Data:', data);
        setSkills(data);
      })
      .catch(err => console.error('Error loading skills:', err));
  }, []);

  const topThreeSkills = skills.slice(0, 3);

  return (
    <div className="font-sans bg-gray-50 text-gray-800 w-full overflow-hidden">
      {/* ------------------ HERO SECTION ------------------ */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 md:py-24 w-11/12 mx-auto">
        {/* Left Text */}
        <div className="max-w-lg space-y-6" data-aos="fade-right">
          <h2 className="text-5xl font-bold leading-tight">
            <span className="text-orange-500">Teach</span> What you know
            <br />
            <span className="text-indigo-700">Learn</span> what you love
          </h2>
          <p className="text-gray-600">
            SkillSwap is an interactive platform that helps you learn skills in
            exchange for your own skill.
          </p>

          {/* Search Input */}
          <div className="flex items-center bg-white rounded-full shadow-md w-full p-2">
            <input
              type="text"
              placeholder="Search skill here..."
              className="flex-1 outline-none px-4 py-2 text-gray-700"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full">
              Search
            </button>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow">
              Get Started
            </button>
            <button className="border border-orange-500 text-orange-500 font-semibold px-6 py-3 rounded-full">
              More Skills
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0 relative" data-aos="fade-left">
          <img
            className="w-96 md:w-[500px] rounded-xl"
            src={rightImg}
            alt="Student"
          />
          {/* Floating Stats */}
          <div className="absolute top-6 right-4 bg-orange-500 text-white shadow-md px-3 py-2 rounded-lg text-sm font-medium">
            <p>10k+ Skills Shared</p>
          </div>
          <div className="absolute bottom-16 left-0 bg-orange-500 text-white shadow-md px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <img className="w-8 h-8 rounded-full" src={boyImg} alt="" />
            <p>50k+ Active Users</p>
          </div>
          <div className="absolute bottom-0 right-6 bg-orange-500 text-white shadow-md px-3 py-2 rounded-lg text-sm font-medium">
            <p>100k+ Connections</p>
          </div>
          <div className="absolute top-6 left-0 bg-orange-500 text-white shadow-md px-3 py-2 rounded-lg text-sm font-medium">
            <p>4.9 Average Rating</p>
          </div>
        </div>
      </section>

      {/* ------------------ POPULAR SKILLS ------------------ */}
      <section className="text-center px-10 py-20 bg-white">
        <h3 className="text-3xl font-bold mb-4" data-aos="fade-up">
          Popular <span className="text-orange-500">Skills</span>
        </h3>
        <p className="text-gray-600 mb-10" data-aos="fade-up">
          Discover what’s trending in our community and find your next learning
          adventure.
        </p>

        <div className="grid md:grid-cols-3 gap-8 w-11/12 mx-auto">
          {topThreeSkills.map(skill => (
            <div
              key={skill.skillId}
              className="bg-gray-50 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              data-aos="zoom-in"
            >
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h4 className="font-bold text-lg mb-2">{skill.skillName}</h4>
                <p className="text-gray-600 text-sm">
                  With {skill.providerName}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-orange-500 font-semibold mb-5 text-xl ml-5">
                  ⭐ {skill.rating}
                </p>
                <span className="font-semibold mb-5 text-xl mr-5 flex items-center gap-2">
                  <img className="w-6 h-6" src={doller} alt="" /> {skill.price}
                </span>
              </div>
              <button className="btn btn-active btn-primary mb-5 mr-80 rounded-xl hover:bg-blue-500">
                View Details
              </button>
            </div>
          ))}
        </div>

        <Link to="/all-skills">
          <button className="mt-10 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold">
            View All
          </button>
        </Link>
      </section>

      {/* ------------------ TOP RATED PROVIDERS ------------------ */}
      <section className="bg-gray-50 py-20 text-center">
        <h3 className="text-3xl font-bold mb-4" data-aos="fade-up">
          Top Rated <span className="text-orange-500">Providers</span>
        </h3>
        <p className="text-gray-600 mb-10" data-aos="fade-up">
          Meet our most loved and highly rated skill providers.
        </p>

        <div className="grid md:grid-cols-3 gap-8 w-11/12 mx-auto">
          {[
            {
              name: 'John Lee',
              skill: 'Web Development',
              rating: '5.0',
              img: 'https://i.ibb.co.com/TMPS1Ny3/1-V-Jp13-Lvt-Vc2-Ii-Y2fp4q-Yw.jpg',
            },
            {
              name: 'Alex Martin',
              skill: 'Guitar Lessons',
              rating: '4.9',
              img: 'https://i.ibb.co.com/C354Bn5r/flat-design-guitar-lessons-facebook-template-23-2149309395.jpg',
            },
            {
              name: 'Sara Hossain',
              skill: 'Spoken English',
              rating: '4.8',
              img: 'https://i.ibb.co.com/WWB67rZT/images.jpgg',
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all"
              data-aos="zoom-in"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />
              <h4 className="mt-4 font-bold text-lg">{p.name}</h4>
              <p className="text-gray-600">{p.skill}</p>
              <p className="text-orange-500 font-semibold mt-2">
                ⭐ {p.rating}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ HOW IT WORKS ------------------ */}
      <section className="py-20 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6" data-aos="fade-up">
          How It <span className="text-orange-500">Works</span>
        </h3>
        <p className="text-gray-600 mb-12" data-aos="fade-up">
          Start learning or teaching in just a few simple steps.
        </p>

        <div
          className="grid md:grid-cols-4 gap-8 w-10/12 mx-auto"
          data-aos="fade-up"
        >
          {[
            {
              step: '1',
              title: 'Sign Up',
              text: 'Create your free SkillSwap account.',
            },
            {
              step: '2',
              title: 'Find a Skill',
              text: 'Browse and explore local skill listings.',
            },
            {
              step: '3',
              title: 'Book a Session',
              text: 'Connect and schedule learning sessions.',
            },
            {
              step: '4',
              title: 'Share Your Skill',
              text: 'Teach others what you’re great at.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              <span className="text-4xl font-bold text-orange-500">
                {item.step}
              </span>
              <h4 className="font-bold text-lg mt-4">{item.title}</h4>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ EXTRA SECTION ------------------ */}
      <section className="bg-indigo-50 py-20 text-center" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-6">
          Join as a <span className="text-orange-500">Skill Provider</span>
        </h3>
        <p className="text-gray-600 mb-10">
          Help others learn by sharing what you love to do. Build your local
          reputation and earn rewards.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold">
          Become a Provider
        </button>
      </section>
    </div>
  );
};

export default Home;
