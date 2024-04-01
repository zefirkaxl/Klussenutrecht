import React from 'react'

import './Hero.scss'
import phone from '../photos/phone.png'
const Hero = (props)=>{
  return (
    <section className="hero">
      <a
        href="width: 50px;
    height: 50px;"
      >
        <img className="hero__phone" src={phone} alt="phone" />
      </a>
    </section>
  );
}

export default Hero