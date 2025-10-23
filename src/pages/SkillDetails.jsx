import React, { useEffect, useState } from 'react';
import Navber from '../component/Navber';
import SkillDetailsCard from '../component/SkillDetailsCard';
import { useLoaderData, useParams } from 'react-router';

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
        <section>
          <h2 className="text-2xl font-semibold text-center items-center py-3">
            Skill Details
          </h2>
          <SkillDetailsCard skill={skill}></SkillDetailsCard>
        </section>
      </main>
    </div>
  );
};

export default SkillDetails;
