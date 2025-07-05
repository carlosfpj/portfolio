import weatherAppImage from '../../Images/Weather-app.png';
import calendarImage from '../../Images/Calendar.png';
import spotifuImage from '../../Images/spotifu.png';
import calculatorImage from '../../Images/Calculator.png';
import clockImage from '../../Images/Clock.png';
import nemiumImage from '../../Images/Nemium.png';

const ENERGYPROJECTS = [
  {
    id: 1,
    name: "Weather App",
    Image: weatherAppImage,
    description: "Keep updated and ready no mather the weather",
    technologies: ["Javascript", "OpenWeatherAPI", "HTML", "CSS"],
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
  }
];

export default ENERGYPROJECTS;