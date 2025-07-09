import React, { Fragment } from 'react';
import { IconContext } from 'react-icons';
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdOutlineOilBarrel } from "react-icons/md";
import SoftwareExperience from '../data/experience/SoftwareExperience';
import EnergyExperience from '../data/experience/EnergyExperience';

const Experience = ({show}) => {
  return (
    <section className="section experience">
      <div className="sectionHead" id="experience">
        <p>Diving in</p>
        <h2 className={`${!show ? "programming-color1" : "oil-gas-color1"}`}>REAL WORK EXPERIENCE</h2>
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
                        <IconContext.Provider value={{ className: "icon-footer", color: "#8444df" }}>
                          <LiaLaptopCodeSolid />
                        </IconContext.Provider>
                    </div>
                    <div className="justify">
                      {exp.partnerLogo && (
                        <i><img width="20px" height="20px" src={exp.partnerLogo} alt="DTI Logo" /></i>
                      )}
                      <h4>{exp.partnerCompany}</h4>
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
                      <img src={exp.Image} alt={exp.partnerCompany} />
                    </div>
                    <div className="experience-description">
                      <div className="experience-description-title">
                        <h3>{exp.Position}</h3>
                        <IconContext.Provider value={{ className: "icon-footer", color: "#7D5260" }}>
                          <MdOutlineOilBarrel />
                        </IconContext.Provider>
                      </div>
                      <div className="justify">
                        {exp.partnerLogo && (
                          <i><img width="35px" height="35px" src={exp.partnerLogo} alt={exp.partnerCompany} /></i>
                        )}
                        <h4>{exp.partnerCompany}</h4>
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