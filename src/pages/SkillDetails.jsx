import React, { useEffect, useState } from 'react';
import Navber from '../component/Navber';
import SkillDetailsCard from '../component/SkillDetailsCard';
import { useLoaderData, useParams } from 'react-router';
import { motion } from 'framer-motion';

const SkillDetails = () => {
  const data = useLoaderData();
  const { skillId } = useParams();
  const [skill, setSkill] = useState({});

  // console.log(data, skillId, skill);

  useEffect(() => {
    const SkillDetails = data.find(
      singleSkill => singleSkill.skillId == skillId
    );
    setSkill(SkillDetails);
  }, [data, skillId]);

  return (
    <div>
      <header>
        <Navber></Navber>
      </header>
      <main className="w-11/12 mx-auto">
        <section className="mb-12 text-center">
          <div className="translate-8">
            {/* Animated Heading */}
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-xl "
            >
              Discover Your Next{' '}
              <span className="underline decoration-wavydecoration-pink-500">
                Skill
              </span>{' '}
              🌟
            </motion.h2>

            {/* Animated Subline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '9rem' }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="h-1 mx-auto mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-lg shadow-pink-400/40"
            ></motion.div>

            {/* Short Inspiring Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              "Every skill you learn opens a new door to creativity, confidence,
              and connection. Master your passion — empower your community with{' '}
              <span className="text-indigo-500 font-semibold">Trade Skill</span>{' '}
              🚀"
            </motion.p>
          </div>

          {/* Skill Card Section */}
          <div className="mt-12">
            <SkillDetailsCard skill={skill}></SkillDetailsCard>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SkillDetails;
