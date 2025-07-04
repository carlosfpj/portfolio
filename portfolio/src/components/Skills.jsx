import React from 'react';
import SoftwareSkills from '../data/skills/SoftwareSkills';
import EnergySkills from '../data/skills/EnergySkills';


const Skills = ({show}) => {
  return (
   <section className="section skills">
    <div className="sectionHead" id="skills">
      <p>Check out my</p>
      <h2>SKILLS</h2>
    </div>
    <article className="skills-skills sectionContainer">
      <ul className="skills-grid">
        {!show ? (
            SoftwareSkills.map((skill) => (
              <li key={skill.id}>
                <div className="skills-item-container">
                  <img src={skill.Image} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              </li>
            ))) : (
            EnergySkills.map((skill) => (
              <li key={skill.id}>
                <div className="skills-item-container">
                  <img src={skill.Image} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              </li>
            )))}
      </ul>
    </article>
  </section>
  );
};

export default Skills;