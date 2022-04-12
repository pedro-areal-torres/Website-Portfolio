import React, { useRef } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';

import './contact.css';

export const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option contact__option-onDesktop'>
            <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>pedro.ts.torres@gmail.com</h5>
              <a
                href='mailto:pedro.ts.torres@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                Write me
              </a>
          </article>
          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>+351 914 666 034</h5>
              <a
                href='https://wa.me/351914666034'
                target='_blank'
                rel='noreferrer'
              >
                Write me
              </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action='https://formspree.io/f/xlezwqkd' method='POST' target='_blank'>
          <input type='text' name='name' placeholder='Name' required />
          <input type='email' name='email' placeholder='Email' required />
          <textarea name='message' rows='5' placeholder='Message' required />
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
