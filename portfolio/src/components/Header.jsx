import React from 'react';
import { IconContext } from 'react-icons';
import me from '../Images/me.png';
import resume from '../assets/Resume Carlos Pinzón.pdf';
import { ImLinkedin } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';

const Header = ({show}) => {
  return (
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
          <a className={`socials-resume ${!show ? 'programming-mode1 programming-mode3' : 'oil-gas-mode1 oil-gas-mode3'}`} href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
          <ul className={`hero-socials-list `}>
            <li>
              <a href="https://www.linkedin.com/in/carlosfpj/" target="_blank" rel="noopener noreferrer">
                <IconContext.Provider value={{ className: "icon-linkedin" }}>
                  <ImLinkedin />
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
  );
};

export default Header;