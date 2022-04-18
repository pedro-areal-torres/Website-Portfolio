import React from 'react';

import ME from '../../assets/img/me-about.png';
import {
  aboutMeData,
  aboutMeList,
  outerCircleIcons,
} from '../../data/about/index';

import './about.css';

export const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me-area'>
          <div className='about__me-outer-circle'>
            {outerCircleIcons.map((icon, index) => {
              return <span key={index}>{icon}</span>;
            })}
          </div>
          <div className='about__me-inner-circle'>
            <img src={ME} alt='About Me' />
          </div>
        </div>
        <div className='about__content'>
          {aboutMeData.map(({ title, location, descr }, index) => {
            return (
              <div key={index}>
                <h2 className='about__title'>{title}</h2>
                <h3 className='about__location'>{location}</h3>
                <p className='about__description'>{descr}</p>
              </div>
            );
          })}
          <ul className='about__list'>
            {aboutMeList.map(({ id, title, descr }) => {
              return (
                <li className='about__list-item' key={id}>
                  <h3>{title}</h3>
                  <span>{descr}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
