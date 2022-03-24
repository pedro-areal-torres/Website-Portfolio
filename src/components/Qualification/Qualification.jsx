import React, { useEffect } from "react";
import "./qualification.css";
import "./index.js";
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";


export const Qualification = () => {
  const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");

  const actionTst = (tab) => {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
          tabContent.classList.remove("qualification__active");
        });
        target.classList.add("qualification__active");

        tab.forEach((tab) => {
          tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active");
      });
    });
  };

  return (
    <section className="qualification section" id="qualification">
      <h5>My Personal Journey</h5>
      <h2>Qualification</h2>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className="qualification__button button--flex qualification__active"
            data-target="#work"
          >
            <MdWork className="qualification__icon" /> Work
          </div>
          <div
            className="qualification__button button--flex"
            data-target="#education"
          >
            <FaGraduationCap className="qualification__icon" /> Education
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className="qualification__content"
            data-content
            id="work"
          >
            {/* QUALIFICACAO 1 */}
            <div className="qualification__data">
              <div className="qualification__data--odd">
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">Sistemas Partilhados do Ministério da Saúde</span>
                <div className="qualification__calendar">
                  <BsCalendar3 /> 2019 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* QUALIFICACAO 2 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Consultant</h3>
                <span className="qualification__subtitle">DatamonPlus</span>
                <div className="qualification__calendar">
                  <BsCalendar3 /> 2019 - 2020
                </div>
              </div>
            </div>

            {/* QUALIFICACAO 3 */}
            <div className="qualification__data">
              <div className="qualification__data--odd">
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">Empresa Têxtil da Maganha</span>
                <div className="qualification__calendar">
                  <BsCalendar3 /> 2019 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
          <div className="qualification__content qualification__active" data-content id="education">
            {/* QUALIFICACAO 1 */}
            <div className="qualification__data">
              <div className="qualification__data--odd">
                <h3 className="qualification__title">BSc in Computer Engineering (Erasmus)</h3>
                <span className="qualification__subtitle">Vilnius Gediminas Technical University, Lithuania</span>
                <div className="qualification__calendar">
                  <BsCalendar3 /> 09/2018 - 01/2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* QUALIFICACAO 2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">Bachelor's Degree in Informatics Engineering</h3>
                <span className="qualification__subtitle">Polytechnic Institute of Porto, Portugal</span>
                <div className="qualification__calendar">
                  <BsCalendar3 /> 09/2014- 09/2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
