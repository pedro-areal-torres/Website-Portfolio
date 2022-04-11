import React, { useEffect } from 'react';
import { BiConfused } from 'react-icons/bi';
import { MdExpandMore } from 'react-icons/md';

import TSTCERT from '../../assets/img/certificado.png';
import skillItems from './index'

import './skills.css';

export const Skills = () => {

  useEffect(() => {
    // initiate the event handler
    skillItems;
    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      skillItems;
    }});

  return (
    <section id='skills'>
      <h2>Skills</h2>
      <div className='container skill__container'>
        <div className='skill'>
          <div className='skill__header'>
            <div className='skill__description'>
              <BiConfused />
              <h4>UI Design</h4>
            </div>
            <span className='skill__arrow expanded'>
              <MdExpandMore />
            </span>
          </div>
          <div className='skill__items'>
            <div className='skill__item'>
              <h3>React</h3>
              <h5>4+ Years</h5>
            </div>
            <div className='skill__item'>
              <h3>JavaScript</h3>
              <h5>4+ Years</h5>
            </div>
          </div>
        </div>
        <div className='skill'>
          <div className='head'>
            <div className='left'>
              <BiConfused />
              <h4>Certifications</h4>
            </div>
            <span className='skill__skill-arrow'>
              <MdExpandMore />
            </span>
          </div>
          <div className='items'>
            <div className='item__certificacion'>
              <img src={TSTCERT} alt='TST' />
              <div className='item__certificacion-details'>
                <h3 className='item__certificacion-title'>Name</h3>
                <h4 className='item__certificacion-entity'>Entity</h4>
                <h5 className='item__certificacion-date'>Entity</h5>
                <button className='item__certificacion-btn'>
                  View Credencial
                </button>
              </div>
            </div>
            <div className='item__certificacion'>
              <img src={TSTCERT} alt='TST' />
              <div className='item__certificacion-details'>
                <h3 className='item__certificacion-title'>Name</h3>
                <h4 className='item__certificacion-entity'>Entity</h4>
                <h5 className='item__certificacion-date'>Entity</h5>
                <button className='item__certificacion-btn'>
                  View Credencial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
