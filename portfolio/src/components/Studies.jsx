import React, { useState, useEffect } from 'react';
import CollapsibleContent from './CollapsibleContent';
import { FaAngleDown } from "react-icons/fa6";
import gridCertificate from '../Images/GridLayout.png';
import Leonidaslogo from '../Images/leonidasesteban-icon.png';
import platziLogo from '../Images/platzi-logo.png';
import flexboxCertificate from '../Images/FlexLayout.png';
import htmlCSSCertificate from '../Images/HTMLyCSS.png';
import javascriptCertificate from '../Images/JS.png';
import databaseCertificate from '../Images/Database_fundamentals.png';
import softwareFundamentalsCertificate from '../Images/Software_Fundamentals.png';
import androidCertificate from '../Images/Android.png';
import algorithmsCertificate from '../Images/platzi-algoritmos.png';
import basicProgrammingCertificate from '../Images/platzi-programacionBasica.png';

const Studies = () => {

  const [collapsedStates, setCollapsedStates] = useState({
    section1: false,
    section2: true,
    section3: true,
    section4: true,
    section5: true,
    section6: true,
    section7: true,
    section8: true,
    section9: true,
  });

  // Función para alternar el estado de colapso de una sección específica
  const toggleCollapse = (sectionId) => {
    setCollapsedStates(prevState => ({
      ...prevState,
      [sectionId]: !prevState[sectionId], // Invierte el estado de la sección clicada
    }));
  };

  return (
    <section className="section studies">
      <div className="sectionHead" id="studies">
        <p>Carlos Never stops learning</p>
        <h2>MY STUDIES</h2>
      </div>
      <article className="studies-description sectionContainer">
        <p>I <b>BELIEVE</b> that passion without discipline isn't enough, that's why I compromise myself to study hard, improve my skills
          and never stop learning. I found exciting to cross code with chemical engineering after 5 years in college and many more of professional experience.
        </p>
        <div className="studies-title">
          <h3>CSS GRID LAYOUT AND INTERFACES</h3>
          <FaAngleDown
            className={`chevron ${collapsedStates.section1 ? 'collapsed' : 'expanded'}`}
            onClick={()=> toggleCollapse('section1')} />
        </div>
        <CollapsibleContent
          isCollapsed={collapsedStates.section1}>
          <div class="studies-studies">
            <div class="studies-course">
              <div class="course-image">
                <img src={gridCertificate}></img>
              </div>
              <div class="course-description">
                <div class="course-description-title">
                  <div class="justify">
                    <i><img width="20px" height="20px" src={Leonidaslogo}></img></i>
                    <h4>LeonidasEsteban.com</h4>
                  </div>
                </div>
                <div class="course-description-topics">
                  <ul>
                    <p><b>Topics Learned</b></p>
                    <li>Column and Row definition.</li>
                    <li>Browser tools for Grid Layout.</li>
                    <li>Grid Gap.</li>
                    <li>Dynamic track sizes.</li>
                    <li>Grid Flow.</li>
                    <li>Grid Aligning.</li>
                  </ul>
                </div>
                <div class="course-description-media">
                  <a href="https://leonidasesteban.com/certificados/6f605869-2675-47b1-a6f6-ba44efeaa39c" target="_blank">Link to course certificate</a>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
        <hr></hr>
        <div class="studies-title">
          <h3>CSS FLEXBOX LAYOUT AND COMPONENTS</h3>
          <FaAngleDown
            className={`chevron ${collapsedStates.section2 ? 'collapsed' : 'expanded'}`}
            onClick={() => toggleCollapse('section2')} />
        </div>
        <CollapsibleContent
          isCollapsed={collapsedStates.section2}>
          <div class="studies-studies">
            <div class="studies-course">
              <div class="course-image">
                <img src={flexboxCertificate}></img>
              </div>
              <div class="course-description">
                <div class="course-description-title">
                  <div class="justify">
                    <i><img width="20px" height="20px" src={Leonidaslogo}></img></i>
                    <h4>LeonidasEsteban.com</h4>
                  </div>
                </div>
                <div class="course-description-topics">
                  <ul>
                    <p><b>Topics Learned</b></p>
                    <li>What is a Component.</li>
                    <li>Flex Layout Box Model.</li>
                    <li>Default FlexBox Configuration.</li>
                    <li>Order and Direction.</li>
                    <li>Flex Lines.</li>
                    <li>Flexibility.</li>
                    <li>Alignment.</li>
                  </ul>
                </div>
                <div class="course-description-media">
                  <a href="https://leonidasesteban.com/certificados/d448bcb6-aab9-4369-8742-6efe210b1a98" target="_blank">Link to
                    course certificate</a>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
        <hr></hr>
        <div class="studies-title">
          <h3>HTML AND CSS ESSENTIAL COURSE</h3>
          <FaAngleDown
            className={`chevron ${collapsedStates.section3 ? 'collapsed' : 'expanded'}`}
            onClick={() => toggleCollapse('section3')} />
        </div>
        <CollapsibleContent
          isCollapsed={collapsedStates.section3}>
          <div class="studies-studies">
            <div class="studies-course">
              <div class="course-image">
                <img src={htmlCSSCertificate}></img>
              </div>
              <div class="course-description">
                <div class="course-description-title">
                  <div class="justify">
                    <i><img width="20px" height="20px" src={Leonidaslogo}></img></i>
                    <h4>LeonidasEsteban.com</h4>
                  </div>
                </div>
                <div class="course-description-topics">
                  <ul>
                    <p><b>Topics Learned</b></p>
                    <li>What is HTML.</li>
                    <li>DOM.</li>
                    <li>Labels.</li>
                    <li>Semantics.</li>
                    <li>Routes and Links.</li>
                    <li>Menus.</li>
                    <li>What is CSS.</li>
                    <li>Add CSS to an HTML document.</li>
                    <li>CSS Selectors.</li>
                    <li>And much much more...</li>
                  </ul>
                </div>
                <div class="course-description-media">
                  <a href="https://leonidasesteban.com/certificados/b6c632af-2cb6-478b-ae0e-9e911642e49e" target="_blank">Link to
                    course certificate</a>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
        <hr></hr>
        <div class="studies-title">
          <h3>JAVASCRIPT AND DOM ESSENTIAL COURSE</h3>
          <FaAngleDown
            className={`chevron ${collapsedStates.section4 ? 'collapsed' : 'expanded'}`}
            onClick={() => toggleCollapse('section4')} />
        </div>
        <CollapsibleContent
          isCollapsed={collapsedStates.section4}>
          <div class="studies-studies">
            <div class="studies-course">
              <div class="course-image">
                <img src={javascriptCertificate}></img>
              </div>
              <div class="course-description">
                <div class="course-description-title">
                  <div class="justify">
                    <i><img width="20px" height="20px" src={Leonidaslogo}></img></i>
                    <h4>LeonidasEsteban.com</h4>
                  </div>
                </div>
                <div class="course-description-topics">
                  <ul>
                    <p><b>Topics Learned</b></p>
                    <li>Add JS in a HTML Document.</li>
                    <li>Expressions and Operators.</li>
                    <li>Variable, Types.</li>
                    <li>Conditionals and Booleans.</li>
                    <li>Objects, Functions, Arrays.</li>
                    <li>Loops</li>
                    <li>And many more topics...</li>
                  </ul>
                </div>
                <div class="course-description-media">
                  <a href="https://leonidasesteban.com/certificados/966a490e-8d39-4cb3-b6f5-d44be977cf1b" target="_blank">Link to
                    course certificate</a>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
        <hr></hr>
        <div class="studies-title">
          <h3>DATABASE FUNDAMENTALS</h3>
          <FaAngleDown
            className={`chevron ${collapsedStates.section5 ? 'collapsed' : 'expanded'}`}
            onClick={() => toggleCollapse('section5')} />
        </div>
        <CollapsibleContent
          isCollapsed={collapsedStates.section5}>
          <div class="studies-studies">
            <div class="studies-course">
              <div class="course-image">
                <img src={databaseCertificate}></img>
              </div>
              <div class="course-description">
                <div class="course-description-title">
                  <div class="justify">
                    <i><img width="20px" height="20px" src={platziLogo}></img></i>
                    <h4>PLATZI</h4>
                  </div>
                </div>
                <div class="course-description-topics">
                  <ul>
                    <p><b>Topics Learned</b></p>
                    <li>What is a DataBase.</li>
                    <li>DDL (Data Definition Languaje).</li>
                    <li>DataBase Entity and Relationships.</li>
                    <li>DataBase Normalization.</li>
                    <li>Queries.</li>
                    <li>Nested Queries.</li>
                    <li>Non Relational Databases.</li>
                    <li>Relational DataBases.</li>
                  </ul>
                </div>
                <div class="course-description-media">
                  <a href="https://platzi.com/p/CarlosFernando/curso/1183-bd-2017/diploma/detalle/" target="_blank">Link to
                    course certificate</a>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
        <hr></hr>
        <div class="studies-title">
          <h3>SOFTWARE ENGINEERING FUNDAMENTALS</h3>
          <FaAngleDown
            className={`chevron ${collapsedStates.section6 ? 'collapsed' : 'expanded'}`}
            onClick={() => toggleCollapse('section6')} />
        </div>
        <CollapsibleContent
          isCollapsed={collapsedStates.section6}>
          <div class="studies-studies">
            <div class="studies-course">
              <div class="course-image">
                <img src={softwareFundamentalsCertificate}></img>
              </div>
              <div class="course-description">
                <div class="course-description-title">
                  <div class="justify">
                    <i><img width="20px" height="20px" src={platziLogo}></img></i>
                    <h4>PLATZI</h4>
                  </div>
                </div>
                <div class="course-description-topics">
                  <ul>
                    <p><b>Topics Learned</b></p>
                    <li>What are Bits and Bytes.</li>
                    <li>Processors and CPU architectures.</li>
                    <li>What is RAM Memory and Hard Memory.</li>
                    <li>Internet Protocols.</li>
                    <li>What is an IP.</li>
                    <li>DNS (Domain Name System).</li>
                    <li>How does .zip works: Binary Tree.</li>
                  </ul>
                </div>
                <div class="course-description-media">
                  <a href="https://platzi.com/p/CarlosFernando/curso/1098-ingenieria/diploma/detalle/" target="_blank">Link to
                    course certificate</a>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
        <hr></hr>
        <div class="studies-title">
          <h3>DEFINITIVE ANDROID COURSE</h3>
          <FaAngleDown
            className={`chevron ${collapsedStates.section7 ? 'collapsed' : 'expanded'}`}
            onClick={() => toggleCollapse('section7')} />
        </div>
        <CollapsibleContent
          isCollapsed={collapsedStates.section7}>
          <div class="studies-studies">
            <div class="studies-course">
              <div class="course-image">
                <img src={androidCertificate}></img>
              </div>
              <div class="course-description">
                <div class="course-description-title">
                  <div class="justify">
                    <i><img width="20px" height="20px" src={platziLogo}></img></i>
                    <h4>PLATZI</h4>
                  </div>
                </div>
                <div class="course-description-topics">
                  <ul>
                    <p><b>Topics Learned</b></p>
                    <li>XML.</li>
                    <li>Linear Layout.</li>
                    <li>Relative Layout.</li>
                    <li>RecyclerView.</li>
                    <li>Toolbar and BottomBar.</li>
                    <li>Material Design.</li>
                    <li>MVC.</li>
                    <li>Hardware Access.</li>
                  </ul>
                </div>
                <div class="course-description-media">
                  <a href="https://platzi.com/p/CarlosFernando/curso/1049-android-2016/diploma/detalle/" target="_blank">Link to
                    course certificate</a>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
        <hr></hr>
        <div class="studies-title">
          <h3>ALGORITHMS COURSE WITH C</h3>
          <FaAngleDown
            className={`chevron ${collapsedStates.section8 ? 'collapsed' : 'expanded'}`}
            onClick={() => toggleCollapse('section8')} />
        </div>
        <CollapsibleContent
          isCollapsed={collapsedStates.section8}>
          <div class="studies-studies">
            <div class="studies-course">
              <div class="course-image">
                <img src={algorithmsCertificate}></img>
              </div>
              <div class="course-description">
                <div class="course-description-title">
                  <div class="justify">
                    <i><img width="20px" height="20px" src={platziLogo}></img></i>
                    <h4>PLATZI</h4>
                  </div>
                </div>
                <div class="course-description-topics">
                  <ul>
                    <p><b>Topics Learned</b></p>
                    <li>Bits and Bytes.</li>
                    <li>Variables and Constants.</li>
                    <li>Strings and Numbers.</li>
                    <li>Booleans and Arrays.</li>
                    <li>Loops.</li>
                    <li>Exceptions and Errors.</li>
                    <li>Functions.</li>
                  </ul>
                </div>
                <div class="course-description-media">
                  <a href="https://platzi.com/p/CarlosFernando/curso/1189-algoritmos-2017/diploma/detalle/" target="_blank">Link to
                    course certificate</a>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
        <hr></hr>
        <div class="studies-title">
          <h3>BASIC PROGRAMMING</h3>
          <FaAngleDown
            className={`chevron ${collapsedStates.section9 ? 'collapsed' : 'expanded'}`}
            onClick={() => toggleCollapse('section9')} />
        </div>
        <CollapsibleContent
          isCollapsed={collapsedStates.section9}>
          <div class="studies-studies">
            <div class="studies-course">
              <div class="course-image">
                <img src={basicProgrammingCertificate}></img>
              </div>
              <div class="course-description">
                <div class="course-description-title">
                  <div class="justify">
                    <i><img width="20px" height="20px" src={platziLogo}></img></i>
                    <h4>PLATZI</h4>
                  </div>
                </div>
                <div class="course-description-topics">
                  <ul>
                    <p><b>Topics Learned</b></p>
                    <li>Inputs.</li>
                    <li>Flow and Conditionals.</li>
                    <li>Variables.</li>
                    <li>Functions.</li>
                    <li>HTML Forms.</li>
                    <li>KeyBoard Events.</li>
                    <li>Math Functions.</li>
                    <li>JS Clases and Arrays.</li>
                  </ul>
                </div>
                <div class="course-description-media">
                  <a href="https://platzi.com/p/CarlosFernando/curso/1050-programacion-basica/diploma/detalle/" target="_blank">Link to
                    course certificate</a>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </article>
    </section>
  );
};

export default Studies;