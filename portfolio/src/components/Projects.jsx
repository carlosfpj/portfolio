import React from 'react';
import SoftwareProjects from '../data/projects/softwareprojects';
import EnergyProjects from '../data/projects/energyprojects';

const Projects = ({ show }) => {
  return (
    <section className="section projects">
      <div className="sectionHead" id="projects">
        <p>Take a look at my</p>
        <h2 className={`${!show ? "programming-color1" : "oil-gas-color1"}`}>PROJECTS</h2>
      </div>
      <article className="sectionContainer">
        <article className="projects-container">
          {!show ? (
            SoftwareProjects.map((project, index) => (
              <React.Fragment key={project.id || index}> {/* Envuelve en React.Fragment */}
                <div className="project-item">
                  <div className="project-image">
                    <img src={project.Image} alt={project.name}></img>
                  </div>
                  <div className="project-description">
                    <div className="project-description-title">
                      <h3>{project.name}</h3>
                      <h4>{project.description}</h4>
                      <h4>Technologies Used: {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="techSpan">{tech}</span>
                      ))}</h4>
                    </div>
                    <div className="project-description-topics">
                      <ul>
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-description-media techSpan">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Project Live</a>
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Project Repo</a>
                    </div>
                  </div>
                </div>
                {index < SoftwareProjects.length - 1 && <hr />}
              </React.Fragment>
            ))
          ) : (
            EnergyProjects.map((project, index) => (
              <React.Fragment key={project.id || index}>
                <div className="project-item">
                  <div className="project-image">
                    <img src={project.Image} alt={project.name}></img>
                  </div>
                  <div className="project-description">
                    <div className="project-description-title">
                      <h3>{project.name}</h3>
                      <h4>{project.description}</h4>
                      <h4>Technologies Used: {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="oilSpan">{tech}</span>
                      ))}</h4>
                    </div>
                    <div className="project-description-topics">
                      <ul>
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-description-media oilSpan">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Project Live</a>
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Project Repo</a>
                    </div>
                  </div>
                </div>
                {index < EnergyProjects.length - 1 && <hr />}
              </React.Fragment>
            ))
          )}
        </article>
      </article>
    </section>
  );
};

export default Projects;