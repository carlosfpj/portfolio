import licitayaImage from "../../Images/licitaya.png";
import seringtecLogo from "../../Images/seringteclogo.jpeg";
import sertingtecImage from "../../Images/seringtecImage.png";
import VrcLogo from "../../Images/VrcLogo.png";
import VrcImage from "../../Images/VRC.jpg";
import HeronLogo from "../../Images/logo-heron.png";
import HeronImage from "../../Images/HeronImagen.jpg";
import CpmImage from "../../Images/CPMImagen.jpg";
import CpmLogo from "../../Images/CPMLogo.svg";

const ENERGYEXPERIENCES = [
  {
    id: 1,
    Position: "Mid Senior Process Engineer",
    Image: sertingtecImage,
    partnerCompany: "SERINGTEC",
    partnerLogo: seringtecLogo,
    technologies: [
      "Aspen Hysys",
      "SLB Pipesim",
    ],
    projectLink: "https://seringtec.com/",
    description: "As a mid Process Engineer at Seringtec, I was responsible for conceptual and detailed engineering, " +
                 "with focus on system optimization and risk management. My role involved generating PFD and P&ID " +
                 "diagrams, as well as developing hydraulic reports and operating philosophies, supported by hydraulic " +
                 "simulations in PIPESIM. I actively participated in HAZID and HAZOP workshops to ensure project safety " +
                 "and efficiency, and collaborated in interdisciplinary reviews and meetings to standardize documentation. " +
                 "Additionally, I had the opportunity to implement variable speed drives for energy efficiency, always aiming to " +
                 "integrate improvements without significantly altering existing operating philosophies.",
  },
  {
    id: 2,
    Position: "Mid Process Engineer",
    Image: VrcImage,
    partnerCompany: "VRC",
    partnerLogo: VrcLogo,
    technologies: [
      "Aspen Hysys",
      "SLB Pipesim",
    ],
    projectLink: "",
    description: "As Process Engineer, I developed the evaluation and optimization of crude oil production systems, " +
                 "combining field visits to gather critical information with the generation of reports, conceptual drawings, " +
                 "and P&IDs to document current scenarios and propose improvements. My experience included the development of " +
                 "process simulations with Hysys and the creation of flow models in pipelines and fluid distributors with Pipesim, " +
                 "essential for the development of assigned change controls. I actively participated in alternatives and risk workshops " +
                 "with the Ecopetrol engineering team, culminating in the generation of technical concepts for the successful closure " +
                 "of change controls. I identified opportunities for operational improvement that resulted in increased efficiency " +
                 "of static and rotating equipment, as well as the development of an Operational Continuity Initiative that optimized " +
                 "the gas balance at the Suerte-Campo Provincia station. Additionally, I had the opportunity to share the experience " +
                 "of this work with students in their final semesters at the university, as shown in the photo.",
  },
  {
    id: 3,
    Position: "Process Engineer | Commisioner",
    Image: HeronImage,
    partnerCompany: "Herón Inghercom Consultores",
    partnerLogo: HeronLogo,
    technologies: [
      "Aspen Hysys",
      "SLB Pipesim",
    ],
    projectLink: "",
    description: "As a Process Engineer at Herón, I was part of the team responsible for the safe and efficient " +
                 "commissioning of the Armadillo B platform. My role ranged from process simulation in Aspen Hysys of " +
                 "the production field and the development of process calculations for static and rotating equipment, to " +
                 "the generation of process drawings (PFDs and P&IDs) and detailed equipment lists for the battery and production " +
                 "field. I efficiently managed pre-commissioning and commissioning, including the development and operation of an " +
                 "Access database for this stage, which enabled accurate progress tracking and early detection of deviations. " +
                 "I participated in the commissioning of rotating equipment and the testing of process systems (oil, water, gas, and auxiliary systems), " +
                 "generating crucial pre-startup technical reports and operational reports for the client. My accomplishments included " +
                 "clarifying operational sequences for the client, proactive follow-up that enabled immediate corrective actions, " +
                 "and effective management of start-up procedures, culminating in the safe and successful operation of the platform.",
  },
  {
    id: 4,
    Position: "Process Engineer",
    Image: CpmImage,
    partnerCompany: "Conspeccime",
    partnerLogo: CpmLogo,
    technologies: [
      "Aspen Hysys",
    ],
    projectLink: "",
    description: "As a Process Engineer at Conspeccime, I was integrally involved in projects from detailed " +
                 "engineering to commissioning, ensuring operational efficiency and safety. My key responsibilities " +
                 "included the design and calculation of critical systems, such as airflow for flares, thermal insulation," +
                 "and radiation, leading the construction, installation, commissioning, and start-up of three encapsulated " +
                 "flares. I developed detailed engineering for a water treatment plant (plans, data sheets, manuals), oversaw " +
                 "the construction of its equipment, and conducted the commissioning and training of Petroecuador's operations " +
                 "personnel, achieving incident-free operations. Additionally, I provided comprehensive technical support for the " +
                 "heating system, from process simulation in Aspen Hysys and P&ID diagram generation, to construction support, FAT " +
                 "testing, and the creation of quality documentation for instrumentation, ensuring its commissioning and safe operation. " +
                 "I also provided technical support for three-phase separators, updating PFD/P&ID drawings and supervising construction " +
                 "and quality assurance efforts. My accomplishments include the safe execution of work in high-radiation areas, efficient " +
                 "project coordination within deadlines, successful knowledge transfer to Petroecuador personnel, and the effective " +
                 "and safe construction and operation of key systems, all under the highest quality and safety standards.",
  },
];

export default ENERGYEXPERIENCES;