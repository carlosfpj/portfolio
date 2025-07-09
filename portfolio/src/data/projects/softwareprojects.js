import weatherAppImage from '../../Images/Weather-app.png';
import calendarImage from '../../Images/Calendar.png';
import spotifuImage from '../../Images/spotifu.png';
import calculatorImage from '../../Images/Calculator.png';
import clockImage from '../../Images/Clock.png';
import nemiumImage from '../../Images/Nemium.png';

const SOFTWAREPROJECTS = [
  {
    id: 1,
    name: "Weather App",
    Image: weatherAppImage,
    description: "Keep updated and ready no mather the weather",
    technologies: ["Javascript, ", "OpenWeatherAPI, ", "HTML, ", "CSS, "],
    features: [
      "App must detect your location using geolocation API previous request.",
      "You can see the current day's weather at different times.",
      "You can Check the weather of the next day at different times.",
      "Background image should change according to weather and time conditions.",
      "Optimized for Mobile.",
      "If the weather is too hot, in the shade is your spot.",
    ],
    liveLink: "https://weather-app-seven-pi.vercel.app",
    repoLink: "https://github.com/carlosfpj/weather-app"
  },
  {
    id: 2,
    name: "Calendar",
    Image: calendarImage,
    description: "Make the most of your time and plan your activities in this incredible calendar.",
    technologies: ["Javascript, ", "HTML, ", "CSS, ", "Grid-Layout, "],
    features: [
      "CSS grid layout 100%.",
      "Calendar can be seen in day or Week.",
      "Dark theme support.",
      "Dates in Calendar appear closer than they are.",
    ],
    liveLink: "https://carlosfpj.github.io/Calendario/index.html",
    repoLink: "https://github.com/carlosfpj/Calendario"
  },
  {
    id: 3,
    name: "Spotifu",
    Image: spotifuImage,
    description: "Spotify clone, the leading global platform for on-demand music consumption.",
    technologies: ["HTML, ", "CSS, ", "FlexBox Layout, ", "Accessibility, "],
    features: [
      "Pixel perfect Spotify clone.",
      "Project based only in flex-box layout.",
      "Project with high accessibility standard.",
      "Let the magic of music spread in our lives",
    ],
    liveLink: "https://carlosfpj.github.io/Calendario/index.html",
    repoLink: "https://github.com/carlosfpj/Calendario"
  },
  {
    id: 4,
    name: "Calculator",
    Image: calculatorImage,
    description: "Fall in love with Math with THE Calculator.",
    technologies: ["HTML, ", "CSS, ", "Javascript, ", "Grid-Layout, "],
    features: [
      "Perform any basic mathematical operation",
      "It will never dissapoint you.",
    ],
    liveLink: "https://calculadora-opal.vercel.app",
    repoLink: "https://github.com/carlosfpj/Calculadora"
  },
  {
    id: 5,
    name: "Digital Clock",
    Image: clockImage,
    description: "Excuse me!!! What time is it?",
    technologies: ["HTML, ", "CSS, ", "Javascript, ", "Vercel, "],
    features: [
      "Digital Clock gives you the current time.",
      "Sets background according to day time.",
      "Where time and code merges.",
    ],
    liveLink: "https://reloj-kappa.vercel.app",
    repoLink: "https://github.com/carlosfpj/Reloj"
  },
  {
    id: 6,
    name: "Nemium",
    Image: nemiumImage,
    description: "This is where all begins",
    technologies: ["HTML, ", "CSS, "],
    features: [
      "Blog site about web development.",
      "Fun to code, lot to learn.",
      "5 different designs",
    ],
    liveLink: "https://carlosfpj.github.io/Nemium-All/",
    repoLink: "https://github.com/carlosfpj/Nemium-All"
  },
];

export default SOFTWAREPROJECTS;