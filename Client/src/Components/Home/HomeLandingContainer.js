import React from "react";
import girlHoldingADog from "./images/girlHoldingADog.png";
import Labra from "./images/Labra.png";
import footPrint from "./images/footPrint.png";
import { Link } from "react-router-dom";

const HomeLandingContainer = (props) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="home-container">
      <div className="homeContainer-left">
        <div>
          <p className="home-title">
            <div className="home-titlePlusPng">
              <p>Save </p>
              <img src={Labra} alt="Dog sitting" />
            </div>
            Speech
            <br />
            Less
          </p>
          <p className="home-second-para">{props.description}</p>
        </div>
        <div className="adopt-btn">
          <Link to="./pets">
            <button className="Home-button" onClick={scrollToTop}>
              <p>Adopt a Pet</p>
              <img src={footPrint} alt="footprint" />
            </button>
          </Link>
        </div>
      </div>
      <div className="homeContainer-right">
        <img src={girlHoldingADog} alt="Girl holding a Dog" />
      </div>
    </div>
  );
};

export default HomeLandingContainer;
