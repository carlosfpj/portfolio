import React from 'react';
import { IconContext } from 'react-icons';
import { GoHome } from 'react-icons/go';
import { LuUserRound } from 'react-icons/lu';
import { SlNotebook } from 'react-icons/sl';
import { GiSkills } from "react-icons/gi";
import { GrProjects, GrContact } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = ({show}) => {
  return (
    <nav className={`nav active ${!show ? 'programming-mode1' : 'oil-gas-mode1'}`}>
      <div className={`nav-logo ${!show ? 'programming-mode2' : 'oil-gas-mode2'}`}>
        <p>CF</p>
      </div>
      <div className="nav-core">
        <ul className="nav-core-list">
          <li className="nav-home">
            <a className={`nav-item ${!show ? 'programming-mode3' : 'oil-gas-mode3'}`} href="https://carlosfpj.github.io/portfolio/">
              <IconContext.Provider value={{ className: "icon-sidebar" }}>
                <GoHome />
              </IconContext.Provider>
              <p>Home</p>
            </a>
          </li>
          <li className="nav-about">
            <a className={`nav-item ${!show ? 'programming-mode3' : 'oil-gas-mode3'}`} href="#about">
              <IconContext.Provider value={{ className: "icon-sidebar" }}>
                <LuUserRound />
              </IconContext.Provider>
              <p>About</p>
            </a>
          </li>
          <li className="nav-studies">
            <a className={`nav-item ${!show ? 'programming-mode3' : 'oil-gas-mode3'}`} href="#studies">
              <IconContext.Provider value={{ className: "icon-sidebar" }}>
                <SlNotebook />
              </IconContext.Provider>
              <p>Studies</p>
            </a>
          </li>
          <li className="nav-skills">
            <a className={`nav-item ${!show ? 'programming-mode3' : 'oil-gas-mode3'}`} href="#skills">
              <IconContext.Provider value={{ className: "icon-sidebar" }}>
                <GiSkills />
              </IconContext.Provider>
              <p>Skills</p>
            </a>
          </li>
          <li className="nav-projects">
            <a className={`nav-item ${!show ? 'programming-mode3' : 'oil-gas-mode3'}`} href="#projects">
              <IconContext.Provider value={{ className: "icon-sidebar" }}>
                <GrProjects />
              </IconContext.Provider>
              <p>Projects</p>
            </a>
          </li>
          <li className="nav-contact">
            <a className={`nav-item ${!show ? 'programming-mode3' : 'oil-gas-mode3'}`} href="#contact">
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
  );
};

export default Navbar;