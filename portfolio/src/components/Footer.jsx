import React from 'react';
import { BsFillSuitHeartFill } from "react-icons/bs";
import { IconContext } from 'react-icons';

const Footer = ({show}) => {
  return (
    <footer className="footer">
      {!show ?
        <IconContext.Provider value={{ className: "icon-footer", color: "#8444df" }}>
          <p>Made with <BsFillSuitHeartFill /> by Carlos Fernando</p>
        </IconContext.Provider>
      :
        <IconContext.Provider value={{ className: "icon-footer", color: "#7D5260" }}>
          <p>Made with <BsFillSuitHeartFill /> by Carlos Fernando</p>
        </IconContext.Provider>
      }
    </footer>
  );
};

export default Footer;