import React from 'react'

import './Video.scss'
import video01 from '../photos/w1.mp4'
import video02 from "../photos/w2.mp4";

import video03 from "../photos/w3.mp4";

const Video = (props)=>{
  return (
    <section className="video">
      <div className="video__container">
        <video className="video__item" controls>
          <source src={video02} type="video/mp4" />
          Ваш браузер не підтримує відео тег.
        </video>
        <video className="video__item" controls>
          <source src={video01} type="video/mp4" />
          Ваш браузер не підтримує відео тег.
        </video>
        <video className="video__item" controls>
          <source src={video03} type="video/mp4" />
          Ваш браузер не підтримує відео тег.
        </video>
      </div>
    </section>
  );
}

export default Video