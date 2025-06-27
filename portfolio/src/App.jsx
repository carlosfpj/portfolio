import './App.css';
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

function App() {
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
              <a className="nav-item" href="https://carlosfpj.github.io/Portfolio/">
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
              <img src="./src/Images/me.png" alt="Carlos Fernando" />
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
              <a className="socials-resume" href="./assets/Resume Carlos Pinzón.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
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
        {/* ABOUT */}
        <section className="section about">
          <div className="sectionHead" id="about">
            <p>Some info</p>
            <h2>ABOUT ME</h2>
          </div>
          <article className="about-description sectionContainer">
            <p>
              Chemical Engineer with 4 years of experience in the design, construction, pre-commissioning,
              commissioning, and start-up of oil&amp;gas facilities and also self-taught front-end developer, passionate
              about building fun code and bringing software solutions to engineering problems.
            </p>
          </article>
        </section>
        {/* PROFESSIONAL EXPERIENCE */}
        <section className="section experience">
          <div className="sectionHead" id="experience">
            <p>Diving in</p>
            <h2>REAL WORK EXPERIENCE</h2>
          </div>
          <article className="experience-description sectionContainer">
            <p>
              I <b>THANK</b> each of the recruiters or managers who gave me the opportunity to contribute to their projects,
              undoubtedly the professional experience is invaluable to be better every day.
            </p>
            <div className="experience-experiences">
              <div className="experience-work">
                <div className="experience-image">
                  <img src="./src/Images/licitaya.png" alt="Licitaya" />
                </div>
                <div className="experience-description">
                  <div className="experience-description-title">
                    <h3>LICITAYA.CO</h3>
                    <div className="justify">
                      <i><img width="20px" height="20px" src="./src/Images/DTI-logo.png" alt="DTI Logo" /></i>
                      <h4>Digital Tech Ideas</h4>
                    </div>
                  </div>
                  <div className="experience-description-topics">
                    <ul>
                      <p><b>Technologies I worked with:</b></p>
                      <li>HTML.</li>
                      <li>CSS.</li>
                      <li>Bootstrap.</li>
                      <li>KeenThemes (Bootstrap Extension).</li>
                      <li>Javascript.</li>
                      <li>JQuery.</li>
                    </ul>
                  </div>
                  <div className="experience-description-media">
                    <a href="https://www.licitaya.co" target="_blank" rel="noopener noreferrer">Link to project</a>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </article>
        </section>
        {/* STUDIES */}
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
                  <img src="./src/Images/html.svg" alt="HTML" />
                  <p>HTML</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src="./src/Images/css.svg" alt="CSS" />
                  <p>CSS</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src="./src/Images/bootstrap.svg" alt="Bootstrap" />
                  <p>BOOTSTRAP</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src="./src/Images/javascript.svg" alt="JavaScript" />
                  <p>JAVASCRIPT</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src="./src/Images/jquery.svg" alt="JQuery" />
                  <p>JQuery</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src="./src/Images/react.svg" alt="React" />
                  <p>REACT</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src="./src/Images/vscode.svg" alt="VS Code" />
                  <p>VS CODE</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src="./src/Images/git.svg" alt="Git" />
                  <p>GIT</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src="./src/Images/github.svg" alt="GitHub" />
                  <p>GITHUB</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src="./src/Images/wordpress.svg" alt="WordPress" />
                  <p>WORDPRESS</p>
                </div>
              </li>
              <li>
                <div className="skills-item-container">
                  <img src="./src/Images/Access.svg" alt="MS Access" />
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
            {/* Add projects content here */}
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
