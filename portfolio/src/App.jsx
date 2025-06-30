import './App.css';
import React, { useState } from 'react';
import {ImLinkedin} from 'react-icons/im';
import {FaGithub} from 'react-icons/fa';
import {GoHome} from 'react-icons/go';
import {LuUserRound} from 'react-icons/lu';
import {SlNotebook} from 'react-icons/sl';
import { GiSkills } from "react-icons/gi";
import { GrProjects, GrContact } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { IconContext } from 'react-icons';
import Studies from './components/Studies';
import Experience from './components/Experience';
import me from './Images/me.png';
import resume from './assets/Resume Carlos Pinzón.pdf';
import htmlImage from './Images/html.svg';
import cssImage from './Images/css.svg';
import bootstrapImage from './Images/bootstrap.svg';
import javascriptImage from './Images/javascript.svg';
import jqueryImage from './Images/jquery.svg';
import reactImage from './Images/react.svg';
import vscodeImage from './Images/vscode.svg';
import gitImage from './Images/git.svg';
import githubImage from './Images/github.svg';
import wordpressImage from './Images/wordpress.svg';
import accessImage from './Images/Access.svg';
import weatherAppImage from './Images/Weather-app.png';
import calendarImage from './Images/Calendar.png';
import spotifuImage from './Images/spotifu.png';
import calculatorImage from './Images/Calculator.png';
import clockImage from './Images/Clock.png';
import nemiumImage from './Images/Nemium.png';
import About from './components/About';

function App() {

  const [isPrograming, setIsPrograming] = useState(true);
  const [fadeDirection, setFadeDirection] = useState('fade-in-left');

  const handleToggle = () => {
    setIsPrograming(!isPrograming);
    setFadeDirection(isPrograming ? 'fade-in-right' : 'fade-in-left');
  };

  return (
    <div className="page">
      {/* Mobile hamburger button */}
      <div className="menuButton" id="menuButton">
        <div className="linesContainer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/* SIDEBAR */}
      <nav className="nav active">
        <div className="nav-logo">
          <p>CF</p>
        </div>
        <div className="nav-core">
          <ul className="nav-core-list">
            <li className="nav-home">
              <a className="nav-item" href="https://carlosfpj.github.io/portfolio/">
                <IconContext.Provider value={{ className: "icon-sidebar" }}>
                  <GoHome />
                </IconContext.Provider>
                <p>Home</p>
              </a>
            </li>
            <li className="nav-about">
              <a className="nav-item" href="#about">
                <IconContext.Provider value={{ className: "icon-sidebar" }}>
                  <LuUserRound />
                </IconContext.Provider>
                <p>About</p>
              </a>
            </li>
            <li className="nav-studies">
              <a className="nav-item" href="#studies">
                <IconContext.Provider value={{ className: "icon-sidebar" }}>
                  <SlNotebook />
                </IconContext.Provider>
                <p>Studies</p>
              </a>
            </li>
            <li className="nav-skills">
              <a className="nav-item" href="#skills">
                <IconContext.Provider value={{ className: "icon-sidebar" }}>
                  <GiSkills />
                </IconContext.Provider>
                <p>Skills</p>
              </a>
            </li>
            <li className="nav-projects">
              <a className="nav-item" href="#projects">
                <IconContext.Provider value={{ className: "icon-sidebar" }}>
                  <GrProjects />
                </IconContext.Provider>
                <p>Projects</p>
              </a>
            </li>
            <li className="nav-contact">
              <a className="nav-item" href="#contact">
                <IconContext.Provider value={{ className: "icon-sidebar" }}>
                  <GrContact />
                </IconContext.Provider>
                <p>Contact</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-footer">
          <FaAngleDown />
          <p>Scroll</p>
        </div>
      </nav>
      <main className="portfolio">
        {/* HEADER */}
        <header className="header" id="header">
          <div className="header-hero">
            <div className="hero-image-container">
              <img src={me} alt="Carlos Fernando" />
            </div>
          </div>
          <div className="hero-description">
            <p className="greeting">HI THERE!!! I AM</p>
            <h1 className="name">Carlos Fernando</h1>
            <p className="smallBio">
              <span>Chemical Engineer</span> with 8 years of experience in the
              Oil&amp;Gas industry and <span>enthusiastic about programming</span> and
              experienced in either energy or software-related fields.
            </p>
            <div className="hero-socials">
              <a className="socials-resume" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
              <ul className="hero-socials-list">
                <li>
                  <a href="https://www.linkedin.com/in/carlosfpj/" target="_blank" rel="noopener noreferrer">
                    <IconContext.Provider value={{ className: "icon-linkedin" }}>
                      <ImLinkedin/>
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/carlosfpj" target="_blank" rel="noopener noreferrer">
                    <IconContext.Provider value={{ className: "icon-linkedin" }}>
                      <FaGithub />
                    </IconContext.Provider>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {/* TOGGLE BUTTON */}
        <div className="toggle-container">
          <span className="label">Programming</span>
          <button className="toggle-button" onClick={handleToggle}>
            <div className={`toggle-circle ${isPrograming ? 'right' : 'left'}`}/>
          </button>
          <span className="label">Oil & Gas</span>
        </div>
        <About show={isPrograming} fade={fadeDirection}/>
        <Experience show={isPrograming} fade={fadeDirection} />
        <Studies />
        {/* SKILLS */}
        <section className="section skills">
          <div className="sectionHead" id="skills">
            <p>Check out my</p>
            <h2>SKILLS</h2>
          </div>
          <article className="skills-skills sectionContainer">
            <ul className="skills-grid">
              <li>
                <div className="skills-item-container">
                  <img src={htmlImage} alt="HTML" />
                  <p>HTML</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src={cssImage} alt="CSS" />
                  <p>CSS</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src={bootstrapImage} alt="Bootstrap" />
                  <p>BOOTSTRAP</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src={javascriptImage} alt="JavaScript" />
                  <p>JAVASCRIPT</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src={jqueryImage} alt="JQuery" />
                  <p>JQuery</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src={reactImage} alt="React" />
                  <p>REACT</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src={vscodeImage} alt="VS Code" />
                  <p>VS CODE</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src={gitImage} alt="Git" />
                  <p>GIT</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src={githubImage} alt="GitHub" />
                  <p>GITHUB</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src={wordpressImage} alt="WordPress" />
                  <p>WORDPRESS</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src={accessImage} alt="MS Access" />
                  <p>MS ACCESS</p>
                </div>
              </li>
            </ul>
          </article>
        </section>
        {/* PROJECTS */}
        <section className="section projects">
          <div className="sectionHead" id="projects">
            <p>Take a look at my</p>
            <h2>PROJECTS</h2>
          </div>
          <article className="sectionContainer">
            <article class="projects-container">
              <div class="project-item">
                <div class="project-image">
                  <img src={weatherAppImage}></img>
                </div>
                <div class="project-description">
                  <div class="project-description-title">
                    <h3>WEATHER APP</h3>
                    <h4>Keep updated and ready no mather the weather</h4>
                    <h4>Technologies Used: <span class="techSpan">Javascript</span>, <span class="techSpan">OpenWeatherAPI</span>,
                      <span class="techSpan">HTML</span>, <span class="techSpan">CSS</span>
                    </h4>
                  </div>
                  <div class="project-description-topics">
                    <ul>
                      <li>App must detect your location using geolocation API previous request.</li>
                      <li>You can see the current day's weather at different times.</li>
                      <li>You can Check the weather of the next day at different times.</li>
                      <li>Background image should change according to weather and time conditions.</li>
                      <li>Optimized for Mobile.</li>
                      <li>If the weather is too hot, in the shade is your spot.</li>
                    </ul>
                  </div>
                  <div class="project-description-media">
                    <a href="https://weather-app-seven-pi.vercel.app" target="_blank">Project Live</a>
                    <a href="https://github.com/carlosfpj/weather-app" target="_blank">Project Repo</a>
                  </div>
                </div>
              </div>
            </article>
            <hr></hr>
            <article class="projects-container">
              <div class="project-item">
                <div class="project-image">
                  <img src={calendarImage}></img>
                </div>
                <div class="project-description">
                  <div class="project-description-title">
                    <h3>CALENDAR</h3>
                    <h4>Make the most of your time and plan your activities in this incredible calendar.</h4>
                    <h4>Technologies Used: <span class="techSpan">Javascript</span>, <span class="techSpan">HTML</span>,
                      <span class="techSpan">CSS</span>, <span class="techSpan">Grid-Layout</span>
                    </h4>
                  </div>
                  <div class="project-description-topics">
                    <ul>
                      <li>CSS grid layout 100%.</li>
                      <li>Calendar can be seen in day or Week.</li>
                      <li>Dark theme support.</li>
                      <li>Dates in Calendar appear closer than they are.</li>
                    </ul>
                  </div>
                  <div class="project-description-media">
                    <a href="https://carlosfpj.github.io/Calendario/index.html" target="_blank">Project Live</a>
                    <a href="https://github.com/carlosfpj/Calendario" target="_blank">Project Repo</a>
                  </div>
                </div>
              </div>
            </article>
            <hr></hr>
            <article class="projects-container">
              <div class="project-item">
                <div class="project-image">
                  <img src={spotifuImage}></img>
                </div>
                <div class="project-description">
                  <div class="project-description-title">
                    <h3>SPOTIFU</h3>
                    <h4>Spotify clone, the leading global platform for on-demand music consumption</h4>
                    <h4>Technologies Used: <span class="techSpan">HTML</span>, <span class="techSpan">CSS</span>,
                      <span class="techSpan">FlexBox Layout</span>, <span class="techSpan">Accessibility</span>
                    </h4>
                  </div>
                  <div class="project-description-topics">
                    <ul>
                      <li>Pixel perfect Spotify clone.</li>
                      <li>Project based only in flex-box layout.</li>
                      <li>Project with high accessibility standard.</li>
                      <li>Let the magic of music spread in our lives</li>
                    </ul>
                  </div>
                  <div class="project-description-media">
                    <a href="https://carlosfpj.github.io/Spotifu/" target="_blank">Project Live</a>
                    <a href="https://github.com/carlosfpj/Spotifu" target="_blank">Project Repo</a>
                  </div>
                </div>
              </div>
            </article>
            <hr></hr>
            <article class="projects-container">
              <div class="project-item">
                <div class="project-image">
                  <img src={calculatorImage}></img>
                </div>
                <div class="project-description">
                  <div class="project-description-title">
                    <h3>CALCULATOR</h3>
                    <h4>Fall in love with Math with THE Calculator</h4>
                    <h4>Technologies Used: <span class="techSpan">Javascript</span>, <span class="techSpan">CSS</span>,
                      <span class="techSpan">HTML</span>, <span class="techSpan">Grid Layout</span>
                    </h4>
                  </div>
                  <div class="project-description-topics">
                    <ul>
                      <li>Perform any basic mathematical operation.</li>
                      <li>It will never dissapoint you.</li>
                    </ul>
                  </div>
                  <div class="project-description-media">
                    <a href="https://calculadora-opal.vercel.app" target="_blank">Project Live</a>
                    <a href="https://github.com/carlosfpj/Calculadora" target="_blank">Project Repo</a>
                  </div>
                </div>
              </div>
            </article>
            <hr></hr>
            <article class="projects-container">
              <div class="project-item">
                <div class="project-image">
                  <img src={clockImage}></img>
                </div>
                <div class="project-description">
                  <div class="project-description-title">
                    <h3>Digital Clock</h3>
                    <h4>Excuse me!!! What time is it?</h4>
                    <h4>Technologies Used: <span class="techSpan">Javascript</span>, <span class="techSpan">CSS</span>,
                      <span class="techSpan">HTML</span>, <span class="techSpan">Vercel</span>
                    </h4>
                  </div>
                  <div class="project-description-topics">
                    <ul>
                      <li>Digital Clock gives you the current time.</li>
                      <li>Sets background according to day time.</li>
                      <li>Where time and code merges.</li>
                    </ul>
                  </div>
                  <div class="project-description-media">
                    <a href="https://reloj-kappa.vercel.app" target="_blank">Project Live</a>
                    <a href="https://github.com/carlosfpj/Reloj" target="_blank">Project Repo</a>
                  </div>
                </div>
              </div>
            </article>
            <hr></hr>
            <article class="projects-container">
              <div class="project-item">
                <div class="project-image">
                  <img src={nemiumImage}></img>
                </div>
                <div class="project-description">
                  <div class="project-description-title">
                    <h3>NEMIUM</h3>
                    <h4>This is where all begins</h4>
                    <h4>Technologies Used: <span class="techSpan">HTML</span>, <span class="techSpan">CSS</span>
                    </h4>
                  </div>
                  <div class="project-description-topics">
                    <ul>
                      <li>Blog site about web development.</li>
                      <li>Fun to code, lot to learn.</li>
                      <li>5 different designs.</li>
                    </ul>
                  </div>
                  <div class="project-description-media">
                    <a href="https://carlosfpj.github.io/Nemium-All/" target="_blank">Project Live</a>
                    <a href="https://github.com/carlosfpj/Nemium-All" target="_blank">Project Repo</a>
                  </div>
                </div>
              </div>
            </article>
          </article>
        </section>
        {/* CONTACT */}
        <section className="section contact">
          <div className="sectionHead" id="contact">
            <p>Send Greetings</p>
            <h2>CONTACT</h2>
          </div>
          <article className="sectionContainer">
            <h3>Get in Touch</h3>
            <div className="contact-points">
              <div className="contact-box">
                <i className="icon-mail"></i>
                <a href="mailto:cafer89@gmail.com">cafer89@gmail.com</a>
                <p>E-mail me</p>
              </div>
            </div>
          </article>
        </section>
        {/* FOOTER */}
        <footer className="footer">
          <IconContext.Provider value={{ className: "icon-footer" }}>
            <p>Made with <BsFillSuitHeartFill /> by Carlos Fernando</p>
          </IconContext.Provider>
        </footer>
      </main>
    </div>
  );
}

export default App;
