import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Studies from './components/Studies';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
        <div>
          <div className="toggle-container">
            <p>Switch portfolio view</p>
          </div>
          <div className="toggle-container">
            <span className="label programming-color1">Programming</span>
            <button className="toggle-button" onClick={handleToggle}>
              <div className={`toggle-circle ${isPrograming ? 'right' : 'left'}`} />
            </button>
            <span className="label oil-gas-color1">Oil & Gas</span>
          </div>
        </div>
        <About show={isPrograming} fade={fadeDirection}/>
        <Experience show={isPrograming} fade={fadeDirection} />
        <Studies show={isPrograming} />
        <Skills show={isPrograming} fade={fadeDirection} />
        <Projects show={isPrograming} fade={fadeDirection} />
        <Contact show={isPrograming}/>
        <Footer show={isPrograming}/>
      </main>
    </div>
  );
}

export default App;
