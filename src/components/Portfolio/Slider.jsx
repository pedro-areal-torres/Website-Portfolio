import React from 'react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { porftolioImages } from '../../assets/index';

// Import Swiper styles
import './slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <div className='portfolio__content'>
      <Swiper
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='product-images-slider'
      >
        {porftolioImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='portfolio__slide'>
              <img src={item} alt='Slider' className='portfolio__img' />
              <div className='portfolio__details'>
                <h1 className='portfolio__details-title'>Wordle Game</h1>
                <p className='portfolio__details-description'>
                  Wordle is an online 5-letter word game. Usually each day a new
                  word is released, but <b>on this version you can play as many
                  times you want</b>. Players have six attempts to guess what the
                  word of the day is. During the guesses, tiles will change
                  colour to help players get the word.
                </p>
                <h4 className='portfolio__details-techs'>
                  Technologies: 
                  <div className="portfolio__details-tech-list">
                    <a href="" className="portfolio__details-tech">ReactJS</a>
                    <a href="" className="portfolio__details-tech">React Hooks</a>
                    <a href="" className="portfolio__details-tech">API Context</a>
                  </div>
                </h4>
                <p className='portfolio__details-creationdt'>
                  Created on: April 2022
                </p>
                <div className='portfolio__btn'>
                  <a href='#' target='_blank' rel='noreferrer'>
                    <button className='btn btn-code'>GitHub Code</button>
                  </a>
                  <a href='#' target='_blank' rel='noreferrer'>
                    <button className='btn btn-primary'>Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
