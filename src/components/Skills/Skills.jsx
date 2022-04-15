import React, { useState } from 'react';
import { AiOutlineTool } from 'react-icons/ai';
import { BsGearWideConnected } from 'react-icons/bs';
import { FaAward } from 'react-icons/fa';
import { VscDebugDisconnect } from 'react-icons/vsc';
import { HiDatabase, HiCubeTransparent } from 'react-icons/hi';
import { MdWeb } from 'react-icons/md';
import { MdExpandMore } from 'react-icons/md';

import {
  backend,
  certifications,
  database,
  dataProtocol,
  frontend,
  patterns,
  tools,
} from '../../data/skills/index';

import './skills.css';

export const Skills = () => {
  const [showFrontend, setShowFrontend] = useState(false);
  const [showBackend, setShowBackend] = useState(false);
  const [showDatabase, setShowDatabase] = useState(false);
  const [showProtocol, setShowProtocol] = useState(false);
  const [showMethodPatterns, setShowMethodPatterns] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);

  const handleFrontend = () => {
    setShowFrontend(!showFrontend);
  };

  const handleBackend = () => {
    setShowBackend(!showBackend);
  };

  const handleDatabase = () => {
    setShowDatabase(!showDatabase);
  };

  const handleProtocol = () => {
    setShowProtocol(!showProtocol);
  };

  const handleMethodPatterns = () => {
    setShowMethodPatterns(!showMethodPatterns);
  };

  const handleTools = () => {
    setShowTools(!showTools);
  };

  const handleCertifications = () => {
    setShowCertifications(!showCertifications);
  };

  return (
    <section id='skills'>
      <h2>Skills</h2>
      <div className='container skill__container'>
        {/* FRONTEND */}
        <div className='skill'>
          <div className='skill__header' onClick={handleFrontend}>
            <div className='skill__description'>
              <MdWeb />
              <h4>Frontend Development</h4>
            </div>
            <span
              className={`skill__arrow ${showFrontend ? 'show-items' : ''}`}
            >
              <MdExpandMore />
            </span>
          </div>
          <div className={`skill__items ${showFrontend ? 'show-items' : ''}`}>
            {frontend.map(({ id, technology, level }) => {
              return (
                <div className='skill__item' key={id}>
                  <h3>{technology}</h3>
                  <h5>{level}</h5>
                </div>
              );
            })}
          </div>
        </div>

        {/* BACKEND */}
        <div className='skill'>
          <div className='skill__header' onClick={handleBackend}>
            <div className='skill__description'>
              <BsGearWideConnected />
              <h4>Backend Development</h4>
            </div>
            <span className={`skill__arrow ${showBackend ? 'show-items' : ''}`}>
              <MdExpandMore />
            </span>
          </div>
          <div className={`skill__items ${showBackend ? 'show-items' : ''}`}>
            {backend.map(({ id, technology, level }) => {
              return (
                <div className='skill__item' key={id}>
                  <h3>{technology}</h3>
                  <h5>{level}</h5>
                </div>
              );
            })}
          </div>
        </div>

        {/* DATABASE */}
        <div className='skill'>
          <div className='skill__header' onClick={handleDatabase}>
            <div className='skill__description'>
              <HiDatabase />
              <h4>Database</h4>
            </div>
            <span
              className={`skill__arrow ${showDatabase ? 'show-items' : ''}`}
            >
              <MdExpandMore />
            </span>
          </div>
          <div className={`skill__items ${showDatabase ? 'show-items' : ''}`}>
            {database.map(({ id, technology, level }) => {
              return (
                <div className='skill__item' key={id}>
                  <h3>{technology}</h3>
                  <h5>{level}</h5>
                </div>
              );
            })}
          </div>
        </div>

        {/* DATA PROTOCOL */}
        <div className='skill'>
          <div className='skill__header' onClick={handleProtocol}>
            <div className='skill__description'>
              <VscDebugDisconnect />
              <h4>Data Protocol</h4>
            </div>
            <span
              className={`skill__arrow ${showProtocol ? 'show-items' : ''}`}
            >
              <MdExpandMore />
            </span>
          </div>
          <div className={`skill__items ${showProtocol ? 'show-items' : ''}`}>
            {dataProtocol.map(({ id, technology, level }) => {
              return (
                <div className='skill__item' key={id}>
                  <h3>{technology}</h3>
                  <h5>{level}</h5>
                </div>
              );
            })}
          </div>
        </div>

        {/* METHODOLOGIES / PATTERNS */}
        <div className='skill'>
          <div className='skill__header' onClick={handleMethodPatterns}>
            <div className='skill__description'>
              <HiCubeTransparent />
              <h4>Dev. Methodologies / Patterns</h4>
            </div>
            <span
              className={`skill__arrow ${showMethodPatterns ? 'show-items' : ''}`}
            >
              <MdExpandMore />
            </span>
          </div>
          <div className={`skill__items ${showMethodPatterns ? 'show-items' : ''}`}>
            {patterns.map(({ id, technology, level }) => {
              return (
                <div className='skill__item' key={id}>
                  <h3>{technology}</h3>
                  <h5>{level}</h5>
                </div>
              );
            })}
          </div>
        </div>

        {/* TOOLS */}
        <div className='skill'>
          <div className='skill__header' onClick={handleTools}>
            <div className='skill__description'>
              <AiOutlineTool />
              <h4>Tools</h4>
            </div>
            <span className={`skill__arrow ${showTools ? 'show-items' : ''}`}>
              <MdExpandMore />
            </span>
          </div>
          <div className={`skill__items ${showTools ? 'show-items' : ''}`}>
            {tools.map(({ id, technology, level }) => {
              return (
                <div className='skill__item' key={id}>
                  <h3>{technology}</h3>
                  <h5>{level}</h5>
                </div>
              );
            })}
          </div>
        </div>

        {/* CERTIFICATION */}
        <div className='skill'>
          <div className='skill__header' onClick={handleCertifications}>
            <div className='skill__description'>
              <FaAward />
              <h4>Certifications</h4>
            </div>
            <span
              className={`skill__arrow ${
                showCertifications ? 'show-items' : ''
              }`}
            >
              <MdExpandMore />
            </span>
          </div>
          <div
            className={`skill__items cert__items ${
              showCertifications ? 'show-items' : ''
            }`}
          >
            {certifications.map(
              ({ id, logo, title, entity, descr, date, credentialURL }) => {
                return (
                  <div className='skill__cert' key={id}>
                    <img src={logo}></img>
                    <div className='skill__cert-details'>
                      <h3 className='skill__cert-title'>{title}</h3>
                      <h4 className='skill__cert-entity'>{entity}</h4>
                      {descr}
                      <h5 className='skill__cert-date'>{date}</h5>
                      <a
                        href={credentialURL}
                        target='_blank'
                        className='skill__cert-view'
                      >
                        Show Credencial
                      </a>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
