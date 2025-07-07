import React from 'react';
import { IconContext } from 'react-icons';
import me from '../Images/me.png';
import ProgCV from '../assets/CV_CFPJ_Prog.pdf';
import EnerCV from '../assets/CV_CFPJ_Ener.pdf';
import { ImLinkedin } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';

const Header = ({show}) => {
  return (
    <header className="header" id="header">
      <div className="header-hero">
        <div className={`${!show ? 'hero-image-container-prog' : 'hero-image-container-ener'}`}>
          <img src={me} alt="Carlos Fernando" />
        </div>
      </div>
      <div className="hero-description">
        <p className="greeting">HI THERE!!! I AM</p>
        <h1 className="name">Carlos Fernando</h1>
        <p className="smallBio">
          <span className="oil-gas-color1">Chemical Engineer</span> with 8 years of experience in the
          Oil&amp;Gas industry and <span className="programming-color1">enthusiastic about programming</span> and
          experienced in either energy or software-related fields.
        </p>
        <div className="hero-socials">
          {show ?
            <a className={`socials-resume ${!show ? 'programming-mode1 programming-mode3' : 'oil-gas-mode1 oil-gas-mode3'}`}
               href={EnerCV}
               target="_blank"
               rel="noopener noreferrer">Resume</a>
          :
            <a className={`socials-resume ${!show ? 'programming-mode1 programming-mode3' : 'oil-gas-mode1 oil-gas-mode3'}`}
              href={ProgCV}
              target="_blank"
              rel="noopener noreferrer">Resume</a>
          }

          <ul className={`hero-socials-list `}>
            <li>
              <a href="https://www.linkedin.com/in/carlosfpj/" target="_blank" rel="noopener noreferrer">
                {!show ?
                  <IconContext.Provider value={{ className: "icon-linkedin", color: "#8444df" }}>
                  <ImLinkedin />
                </IconContext.Provider>
                :
                  <IconContext.Provider value={{ className: "icon-linkedin", color: "#7D5260" }}>
                    <ImLinkedin />
                  </IconContext.Provider>
                }
              </a>
            </li>
            <li>
              <a href="https://github.com/carlosfpj" target="_blank" rel="noopener noreferrer">
                {!show ?
                  <IconContext.Provider value={{ className: "icon-linkedin", color: "#8444df"}}>
                    <FaGithub />
                  </IconContext.Provider>
                :
                  <IconContext.Provider value={{ className: "icon-linkedin", color: "#7D5260" }}>
                    <FaGithub />
                  </IconContext.Provider>
                }
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;