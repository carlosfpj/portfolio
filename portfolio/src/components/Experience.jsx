import React, { Fragment } from 'react';
import SoftwareExperience from '../data/SoftwareExperience';
import EnergyExperience from '../data/EnergyExperience';

const Experience = ({show}) => {
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
          {!show ?
            (
              SoftwareExperience.map((exp, index) => (
              <Fragment key={exp.index || index}>
                <div className="experience-work">
                  <div className="experience-image">
                    <img src={exp.Image} alt="LicitayaImage" />
                  </div>
                  <div className="experience-description">
                    <div className="experience-description-title">
                      <h3>{exp.Position}</h3>
                      <div className="justify">
                        {exp.partnerLogo && (
                          <i><img width="20px" height="20px" src={exp.partnerLogo} alt="DTI Logo" /></i>
                        )}
                        <h4>{exp.partnerCompany}</h4>
                      </div>
                    </div>
                    <div className="experience-description-topics">
                      <ul>
                        <p><b>Technologies I worked with:</b></p>
                        {exp.technologies.map((tech, techIndex) => (
                          <li key={techIndex}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="experience-description-media">
                      <a href={exp.projectLink} target="_blank" rel="noopener noreferrer">Link to project</a>
                    </div>
                  </div>
                </div>
                {index < SoftwareExperience.length - 1 && <hr />}
              </Fragment>
              ))
            ) :
             (
              EnergyExperience.map((exp, index) => (
                <Fragment key={exp.index || index}>
                  <div className="experience-work">
                    <div className="experience-image">
                      <img src={exp.Image} alt="LicitayaImage" />
                    </div>
                    <div className="experience-description">
                      <div className="experience-description-title">
                        <h3>{exp.company}</h3>
                        <div className="justify">
                          {exp.partnerLogo && (
                            <i><img width="20px" height="20px" src={exp.partnerLogo} alt="DTI Logo" /></i>
                          )}
                          <h4>{exp.partnerCompany}</h4>
                        </div>
                      </div>
                      <div className="experience-description-topics">
                        <ul>
                          <p><b>Key Responsibilities:</b></p>
                          {exp.description}
                          <p><b>Tools Used:</b></p>
                          {exp.technologies.map((tech, techIndex) => (
                            <li key={techIndex}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="experience-description-media">
                        <a href={exp.projectLink} target="_blank" rel="noopener noreferrer">Link to company</a>
                      </div>
                    </div>
                  </div>
                  {index < EnergyExperience.length - 1 && <hr />}
                </Fragment>
              ))
          )
        }
        </div>
      </article>
    </section>
  );
};

export default Experience;