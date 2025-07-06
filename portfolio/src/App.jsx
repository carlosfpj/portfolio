import './App.css';
import React, { useState } from 'react';
import { BsFillSuitHeartFill } from "react-icons/bs";
import { IconContext } from 'react-icons';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Studies from './components/Studies';
import Experience from './components/Experience';
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
      <Navbar show={isPrograming} />
      {/* MAIN CONTENT */}
      <main className="portfolio">
      <Header show={isPrograming} />
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
