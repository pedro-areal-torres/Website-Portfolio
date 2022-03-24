import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

export const Experience = () => {
  const frontend = [
    {
      id: 1,
      technology: "ReactJS",
      level: "2 Years",
    },
    {
      id: 2,
      technology: "TypeScript",
      level: "2 Years",
    },
    {
      id: 3,
      technology: "JavaScript",
      level: "4+ Years",
    },
    {
      id: 4,
      technology: "HTML",
      level: "4+ Years",
    },
    {
      id: 5,
      technology: "CSS",
      level: "4+ Years",
    },
  ];

  const backend = [
    {
      id: 1,
      technology: "NodeJS",
      level: "4+ Years",
    },
    {
      id: 2,
      technology: "Java 8",
      level: "4+ Years",
    },
    {
      id: 3,
      technology: "AWS",
      level: "1 Year",
    },
    {
      id: 4,
      technology: "Express.js",
      level: "1 Year",
    },
    {
      id: 5,
      technology: "Spring",
      level: "4 Years",
    },
    {
      id: 6,
      technology: "Hibernate",
      level: "2+ Years",
    },
  ];

  const database = [
    {
      id: 1,
      technology: "MySQL",
      level: "4+ Years",
    },
    {
      id: 2,
      technology: "PL/SQL",
      level: "4+ Years",
    },
    {
      id: 3,
      technology: "PostgreSQL",
      level: "4+ Years",
    },
    {
      id: 4,
      technology: "MongoDB",
      level: "1 Year",
    },
  ];

  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontend.map(({ id, technology, level }) => {
              return (
                <article key={id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{technology}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backend.map(({ id, technology, level }) => {
              return (
                <article key={id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{technology}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {/* END OF BACKEND */}

        <div className="experience__database">
          <h3>Database</h3>
          <div className="experience__content">
            {database.map(({ id, technology, level }) => {
              return (
                <article key={id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{technology}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {/* END OF DATABASE */}
      </div>
    </section>
  );
};
