import React, { Fragment, useState, useEffect } from 'react';
import CollapsibleContent from './CollapsibleContent';
import { FaAngleDown } from "react-icons/fa6";
import ENERGYSTUDIES from '../data/studies/EnergyStudies';
import SOFTWARESTUDIES from '../data/studies/SoftwareStudies';


const Studies = ({ show }) => {

  // Función auxiliar para inicializar el estado de colapso para un conjunto de estudios
  // Esto asegura que cada estudio tenga su propia entrada en collapsedStates
  const initializeCollapsedStates = (studiesArray) => {
    const initialState = {};
    studiesArray.forEach((study, index) => {
      // Usar study.id si existe y es único, de lo contrario, usar un identificador basado en el índice y el tipo
      const id = study.id || `study-${index}`;
      initialState[id] = true; // Por defecto, todos colapsados
    });
    return initialState;
  };

  // El estado ahora se inicializará dinámicamente
  // Podrías inicializarlo solo una vez si la lista de estudios es estática
  // O usar useEffect para reinicializar si ENERGYSTUDIES/SOFTWARESTUDIES cambian
  const [collapsedStates, setCollapsedStates] = useState(() => {
    // Inicializa con los estudios de energía por defecto, o con una combinación si lo prefieres
    return initializeCollapsedStates([...ENERGYSTUDIES, ...SOFTWARESTUDIES]);
  });

  // Si 'show' cambia y necesitas reinicializar o ajustar el estado
  // Esto es útil si las listas de estudios pueden cambiar dinámicamente
  useEffect(() => {
    if (show) {
      setCollapsedStates(initializeCollapsedStates(ENERGYSTUDIES));
    } else {
      setCollapsedStates(initializeCollapsedStates(SOFTWARESTUDIES));
    }
  }, [show]);



  const toggleCollapse = (studyId) => {
    setCollapsedStates(prevState => ({
      ...prevState,
      [studyId]: !prevState[studyId],
    }));
  };

  return (
    <section className="section studies">
      <div className="sectionHead" id="studies">
        <p>Carlos Never stops learning</p>
        <h2>MY STUDIES</h2>
      </div>
      {show ? (
        // Bloque para ENERGYSTUDIES
        <article className="studies-description sectionContainer">
          <p>
            This section highlights my academic background and certifications related to Energy.
          </p>
          {ENERGYSTUDIES.map((study, index) => {
            // Genera un ID único para cada estudio si no lo tiene ya
            const studyId = study.id || `energy-study-${index}`;
            return (
              <Fragment key={studyId}> {/* Usar studyId como key */}
                <div className="studies-title">
                  <h3>{study.CourseName}</h3>
                  <FaAngleDown
                    // Aquí es donde vinculas el chevron al ID único del estudio
                    className={`chevron ${collapsedStates[studyId] ? 'collapsed' : 'expanded'}`}
                    onClick={() => toggleCollapse(studyId)} />
                </div>
                <CollapsibleContent
                  isCollapsed={collapsedStates[studyId]}>
                  <div className="studies-studies">
                    <div className="studies-course">
                      <div className="course-image">
                        <img src={study.CourseImage} alt={study.CourseName} />
                      </div>
                      <div className="course-description">
                        <div className="course-description-title">
                          <div className="justify">
                            {study.partnerLogo && (
                              <i><img width="20px" height="20px" src={study.partnerLogo} alt={study.School} /></i>
                            )}
                            <h4>{study.School}</h4>
                          </div>
                        </div>
                        <div className="course-description-topics">
                          <ul>
                            <p><b>Topics Learned</b></p>
                            {study.topics.map((topic, topicIndex) => (
                              <li key={topicIndex}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="course-description-media">
                          <a href={study.projectLink} target="_blank" rel="noopener noreferrer">Link to college</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
                {index < ENERGYSTUDIES.length - 1 && <hr />}
              </Fragment>
            );
          })}
        </article>
      ) : (
        // Bloque para SOFTWARESTUDIES
        <article className="studies-description sectionContainer">
          <p>
            I **BELIEVE** that passion without discipline isn't enough, that's why I compromise myself to study hard, improve my skills
            and never stop learning. I found exciting to cross code with chemical engineering after 5 years in college and many more of professional experience.
          </p>
          {SOFTWARESTUDIES.map((study, index) => {
            // Genera un ID único para cada estudio si no lo tiene ya.
            // Es CRUCIAL que estos IDs sean distintos de los de ENERGYSTUDIES si ambos arrays
            // se procesan en el mismo 'collapsedStates' o si 'show' cambia.
            const studyId = study.id || `software-study-${index}`;
            return (
              <Fragment key={studyId} >
                <div className="studies-title">
                  <h3>{study.CourseName}</h3>
                  <FaAngleDown
                    className={`chevron ${collapsedStates[studyId] ? 'collapsed' : 'expanded'}`}
                    onClick={() => toggleCollapse(studyId)} />
                </div>
                <CollapsibleContent
                  isCollapsed={collapsedStates[studyId]}>
                  <div className="studies-studies">
                    <div className="studies-course">
                      <div className="course-image">
                        <img src={study.CourseImage} alt={study.CourseName} />
                      </div>
                      <div className="course-description">
                        <div className="course-description-title">
                          <div className="justify">
                            {study.partnerLogo && (
                              <i><img width="20px" height="20px" src={study.partnerLogo} alt={study.School} /></i>
                            )}
                            <h4>{study.School}</h4>
                          </div>
                        </div>
                        <div className="course-description-topics">
                          <ul>
                            <p><b>Topics Learned</b></p>
                            {study.topics.map((topic, topicIndex) => (
                              <li key={topicIndex}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="course-description-media">
                          <a href={study.projectLink} target="_blank" rel="noopener noreferrer">Link to college</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
                {index < SOFTWARESTUDIES.length - 1 && <hr />}
              </Fragment>
            );
          })}
        </article>
      )}
    </section>
  )
};

export default Studies;