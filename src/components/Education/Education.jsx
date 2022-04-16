import React from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';

import { ISEP_LOGO, VGTU_LOGO } from '../../data/education/index';

import './education.css';

export const Education = () => {
  return (
    <section id='education'>
      <h2>Education</h2>

      <div className='education__container container'>
        <div className='education__sections'>
          <div className='education__content education__active'>
            {/* EDUCATION 1 */}
            <div className='education__data'>
              <div className='education__data--odd'>
                <span>
                  <img
                    src={VGTU_LOGO}
                    alt='VGTU Logo'
                    className='education__logo education__logo--saturate'
                  />
                </span>
                <h3 className='education__title'>
                  BSc in Computer Engineering (Erasmus)
                </h3>
                <a
                  href='https://vilniustech.lt/index.php?lang=2'
                  target='_blank'
                  rel='noreferrer'
                  className='education__subtitle'
                >
                  Vilnius Gediminas Technical University, Lithuania
                  <FiLink className='experience__hyperlink' />
                </a>
                <div className='education__calendar'>
                  <BsCalendar3 className='education__calendar-icon'/> 09/2018 - 01/2019
                </div>
              </div>

              <div>
                <span className='education__rounder'></span>
                <span className='education__line'></span>
              </div>
            </div>

            {/* EDUCATION 2 */}
            <div className='education__data'>
              <div></div>

              <div>
                <span className='education__rounder'></span>
              </div>

              <div>
                <span>
                  <img
                    src={ISEP_LOGO}
                    alt='ISEP Logo'
                    className='education__logo education__logo--saturate'
                  />
                </span>
                <h3 className='education__title'>
                  Bachelor's Degree in Informatics Engineering
                </h3>
                <a
                  href='https://www.isep.ipp.pt/'
                  target='_blank'
                  rel='noreferrer'
                  className='education__subtitle'
                >
                  Polytechnic Institute of Porto, Portugal
                  <FiLink className='experience__hyperlink' />
                </a>
                <div className='education__calendar'>
                  <BsCalendar3 className='education__calendar-icon'/> 09/2014- 09/2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
