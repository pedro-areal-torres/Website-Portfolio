import React, { useEffect, useState } from 'react';

import { navListDesktop } from '../../data/nav/index';
import { scrollActive } from './utils.js';

import './navDesktop.css';

export const NavDesktop = () => {

  useEffect(() => {
    // Initiate the event handler
    window.addEventListener('scroll', scrollActive);

    
    scrollActive();

    // Clean up the event every time the component is re-rendered
    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, [window.scrollY]);

  return (
    <nav className='nav__menu-desktop'>
      <ul>
        {navListDesktop.map(({ id, sectionId, icon, name }) => {
          return (
            <li
              className='nav__item'
              key={sectionId}
              id={`nav__${id}`}
            >
              <a
                href={sectionId}
              >
                <span className='icon'>{icon}</span>
                <span className='text'>{name}</span>
              </a>
            </li>
          );
        })}
        <div className='indicator'></div>
      </ul>
    </nav>
  );
};
