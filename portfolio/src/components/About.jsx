import React from 'react';

const About = ({show, fade}) => {
  return (
    <section className="section about">
      <div className="sectionHead" id="about">
        <p>Some info</p>
        <h2 className={`${!show ? "programming-color1" : "oil-gas-color1"}`}>ABOUT ME</h2>
      </div>
      <article className={`about-description sectionContainer ${fade}`}>
        {show ? (
          <p>
            Chemical Engineer with 8 years of experience in the design, construction, pre-commissioning,
            commissioning, and start-up of oil&amp;gas facilities.
          </p>
        ) : (
          <p>
            As a self-taught software developer, my
            passion is to transform engineering problems into creative software solutions that are fun to code.
          </p>
        )}
      </article>
    </section>
  );
};

export default About;