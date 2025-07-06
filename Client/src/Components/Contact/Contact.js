import React from "react";
import bgImage from "./images/bg-labra.png";

const Contact = () => {
  return (
    <div
      className="contactUs-main-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i className="fa fa-envelope"></i>
        <a className="mail-links" href="mailto:yenurkartushar944@gmail.com">
          yenurkartushar944@gmail.com
        </a>

        <i className="fa fa-linkedin"></i>
        <a
          className="mail-links"
          href="https://www.linkedin.com/in/tushar-yenurkar-47814831b/"
        >
          User Name: Tushar Yenurkar
        </a>

        <i className="fa fa-github"></i>
        <a className="mail-links" href="https://github.com/tusharyenurkar">
          Tushar Yenurkar
        </a>

        <i className="fa fa-instagram"></i>
        <a className="mail-links" href="https://www.instagram.com/tushar_4uh/">
          @tushar_4uh
        </a>

        <i className="fa fa-phone"></i>
        <a className="mail-links" href="tel:+91901117157432">
          +91 901117157432
        </a>
      </div>
    </div>
  );
};

export default Contact;
