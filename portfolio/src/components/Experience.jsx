import React from 'react';
import licitaya from '../Images/licitaya.png';
import dtiLogo from '../Images/DTI-logo.png';

const Experience = () => {
  return (
    <section className="section experience">
      <div className="sectionHead" id="experience">
        <p>Diving in</p>
        <h2>REAL WORK EXPERIENCE</h2>
      </div>
      <article className="experience-description sectionContainer">
        <p>
          I <b>THANK</b> each of the recruiters or managers who gave me the opportunity to contribute to their projects,
          undoubtedly the professional experience is invaluable to be better every day.
        </p>
        <div className="experience-experiences">
          <div className="experience-work">
            <div className="experience-image">
              <img src={licitaya} alt="Licitaya" />
            </div>
            <div className="experience-description">
              <div className="experience-description-title">
                <h3>LICITAYA.CO</h3>
                <div className="justify">
                  <i><img width="20px" height="20px" src={dtiLogo} alt="DTI Logo" /></i>
                  <h4>Digital Tech Ideas</h4>
                </div>
              </div>
              <div className="experience-description-topics">
                <ul>
                  <p><b>Technologies I worked with:</b></p>
                  <li>HTML.</li>
                  <li>CSS.</li>
                  <li>Bootstrap.</li>
                  <li>KeenThemes (Bootstrap Extension).</li>
                  <li>Javascript.</li>
                  <li>JQuery.</li>
                </ul>
              </div>
              <div className="experience-description-media">
                <a href="https://www.licitaya.co" target="_blank" rel="noopener noreferrer">Link to project</a>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </article>
    </section>
  );
};

export default Experience;