import React from 'react'

import './Options.scss'
const items = [
  "elektriciteit",
  "Stucwerk",
  "badkamer renovatie",
  "keuken renovatie",
  "laminaat parket leggen",
  "loodgieter",
  "Isolatie",
  "timmerwerk",
  "het schilderen van de muren",
];
const Options = (props)=>{
  return (
    <section id='option' className="options">
      <div className="options__container">
        <h2 className="options__title">Soorten werk dat wij doen</h2>
        <ul className="options__list">
          {items.map((item) => {
            return <li className='options__item' key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}

export default Options