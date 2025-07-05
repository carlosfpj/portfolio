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
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

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
        <Studies show={isPrograming} />
        <Skills show={isPrograming} fade={fadeDirection} />
        <Projects show={isPrograming} fade={fadeDirection} />
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
