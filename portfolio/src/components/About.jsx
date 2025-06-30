import React from 'react';

const About = ({show, fade}) => {
  return (
    <section className="section about">
      <div className="sectionHead" id="about">
        <p>Some info</p>
        <h2>ABOUT ME</h2>
      </div>
      <article className={`about-description sectionContainer ${fade}`}>
        {show ? (
          <p>
            Chemical Engineer with 4 years of experience in the design, construction, pre-commissioning,
            commissioning, and start-up of oil&amp;gas facilities.
          </p>
        ) : (
          <p>
              self-taught software developer, passionate
              about building fun code and bringing software solutions to engineering problems.
          </p>
        )}
      </article>
    </section>
  );
};

export default About;