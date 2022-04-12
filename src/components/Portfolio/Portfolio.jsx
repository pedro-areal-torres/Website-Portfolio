import React from 'react';
import './portfolio.css';
import Projects from './Projects';

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2 className='section__title'>Portfolio</h2>
      <div className='portfolio__container container swiper-container'>
        <Projects />
      </div>
    </section>
  );
};
