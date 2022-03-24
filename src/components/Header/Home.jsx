import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "../Particles/ParticlesBackground.js";
import Typewriter from "typewriter-effect";
import "./header.css";
import { CTA } from "./CTA";
import { HomeSocial } from "./HomeSocial";
import { BsMouseFill } from "react-icons/bs";

export const Home = () => {
  return (
    <section id="home" className="section__home">
      <div className="container header__container">
        <Particles params={particlesConfig} />
        <h3>Hello I'm</h3>
        <h1>Pedro Torres</h1>
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "Software Engineer",
              "Exactly who you need!",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <CTA />
        <HomeSocial />

        <a href="#about" className="home__scroll">
          <BsMouseFill className="home__scroll-icon" />
          <span className="home__scroll-name">Scroll Down →</span>
        </a>
      </div>
    </section>
  );
};
