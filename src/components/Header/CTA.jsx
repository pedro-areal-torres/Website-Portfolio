import React from 'react'
import CV from '../../assets/CV-Pedro Torres.pdf';

export const CTA = () => {
  return (
    <div className="cta">
        <a href="#about" className='btn'>About Me</a>
        <a href={CV} download className='btn btn-primary'>Download CV</a>
    </div>
  )
}