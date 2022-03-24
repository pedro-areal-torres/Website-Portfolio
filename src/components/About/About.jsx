import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { HiAcademicCap } from "react-icons/hi";

const data = [
  {
    id: 1,
    image: <FaAward className="about__icon" />,
    title: "Experience",
    text: "4+ Years",
  },
  {
    id: 2,
    image: <HiAcademicCap className="about__icon" />,
    title: "Certifications",
    text: "15+ Completed",
  },
];

export const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {data.map(({ id, image, title, text }) => {
              return (
                <article key={id} className="about__card">
                  {image}
                  <h5>{title}</h5>
                  <h4>{text}</h4>
                </article>
              );
            })}
          </div>
          <p>
            Full Stack Developer with 4 years background in creating and
            executing innovative software solutions. Experienced in all aspects
            of the software development lifecycle, from concept through to
            development and delivery, working closely with product owners.
            Consistently recognized as a hands-on, fast-learner, detail-oriented
            and highly committed to their roles and established deadlines.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
