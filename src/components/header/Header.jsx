import React from 'react'
import { useState } from "react";

import './Header.scss'
 import logo from '../photos/logo.png'
 import icloud from '../photos/icloud.png'
const Header = (props)=>{
   
   const [onActive, setOnActive] = useState(true);
   const toggleActive = () => {
     setOnActive((onActive) => !onActive);
     
   };
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt={"hause-logo"} />
        <nav className={onActive ? "header__nav" : "header__nav active"}>
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#">Thuis</a>
            </li>
            <li className="menu__item">
              <a href="#">Soorten werk</a>
            </li>
            <li className="menu__item">
              <a href="#">klanten</a>
            </li>
          </ul>
        </nav>
        <div className="header__contacts">
          <a href="C">+31 685 78 89 18</a>
          <a href="mailto:klussenbedrijf.nl@icloud.com">
            <img src={icloud} alt="icloud" />
          </a>
        </div>
        <button
          onClick={toggleActive}
          className={onActive ? "burger" : " burger burger__active"}
        >
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header