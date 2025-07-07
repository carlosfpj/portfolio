import React from 'react';

const Contact = ({show}) => {
  return (
    <section className="section contact">
      <div className="sectionHead" id="contact">
        <p>Send Greetings</p>
        <h2 className={`${!show ? "programming-color1" : "oil-gas-color1"}`}>CONTACT</h2>
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
  );
};

export default Contact;