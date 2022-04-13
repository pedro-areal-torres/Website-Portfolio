import React from 'react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import portfolioProj from '../../data/portfolio/index';

// Import Swiper styles
import './swiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
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
        {portfolioProj.map(
          ({
            id,
            name,
            img,
            descr,
            shortDescr,
            techs,
            creationUpdateDt,
            codeUrl,
            demoUrl,
          }) => (
            <SwiperSlide key={id}>
              <div className='portfolio__slide'>
                <img src={img} alt='Slider' className='portfolio__img' />
                <div className='portfolio__details'>
                  <h2 className='portfolio__details-title'>{name}</h2>
                  <div className='portfolio__details desktop'>{descr}</div>
                  <div className='portfolio__details mobile'>{shortDescr}</div>
                  <div className='portfolio__tech'>
                    <h4 className='portfolio__tech-title'>
                      Technologies
                      <span className='portfolio__tech-ddots'>:</span>
                    </h4>
                    <div className='portfolio__tech-list'>
                      {techs.map(({ id, name, url }) => {
                        return (
                          <>
                            <a
                              href={url}
                              className='portfolio__tech-item'
                              key={id}
                            >
                              {name}
                            </a>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <p className='portfolio__details-creationdt'>
                    {creationUpdateDt}
                  </p>
                  {codeUrl && demoUrl && (
                    <div className='portfolio__btn'>
                      <a href={codeUrl} target='_blank' rel='noreferrer'>
                        <button className='btn btn-code'>GitHub Code</button>
                      </a>
                      <a href={demoUrl} target='_blank' rel='noreferrer'>
                        <button className='btn btn-primary'>Live Demo</button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Projects;
