import React from "react";

import "./Hero.scss";
import hero from "../photos/1.jpg";
const Hero = (props) => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__body body-hero">
          <h1 className="body-hero__title">
            good quality <span>ata good price</span>
          </h1>
          <p className="body-hero__suptitle">Sustainable. Social. Scalable.</p>
        </div>
        <div className="hero__img">
          <img src={hero} alt="hause" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
