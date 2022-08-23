import React, { useState } from "react";
import { BsCalendar3 } from "react-icons/bs";
import { FiLink } from "react-icons/fi";

import {
  CESAE_LOGO,
  DATAMON_LOGO,
  ETM_LOGO,
  ING_LOGO,
  SPMS_LOGO,
} from "../../data/experience/index";
import "./experience.css";

export const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="experience__container container">
        <div className="experience__sections">
          <div className="experience__content" id="work">
            {/* QUALIFICACAO 1 */}
            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div>
                <span>
                  <img
                    src={ING_LOGO}
                    alt="ING Logo"
                    className="experience__logo experience__logo--saturate"
                  />
                </span>
                <h3 className="experience__title">DevOps Engineer</h3>
                <a
                  href="https://www.ing.com/Home.htm"
                  target="_blank"
                  rel="noreferrer"
                  className="experience__subtitle"
                >
                  ING Group
                  <FiLink className="experience__hyperlink" />
                </a>
                <div className="experience__calendar">
                  <BsCalendar3 className="experience__calendar-icon" /> 07/2022
                  - Present
                </div>
              </div>
            </div>

            {/* QUALIFICACAO 2 */}
            <div className="experience__data">
              <div className="experience__data--odd">
                <span>
                  <img
                    src={CESAE_LOGO}
                    alt="CESAE Logo"
                    className="experience__logo experience__logo--saturate"
                  />
                </span>
                <h3 className="experience__title">IT Trainer</h3>
                <a
                  href="https://www.cesaedigital.pt/"
                  target="_blank"
                  rel="noreferrer"
                  className="experience__subtitle"
                >
                  CESAE - Training Center for Technical Certification
                  <FiLink className="experience__hyperlink" />
                </a>
                <div className="experience__calendar">
                  <BsCalendar3 className="experience__calendar-icon" /> 05/2022
                  - Present
                </div>
              </div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>

            {/* QUALIFICACAO 3 */}
            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div>
                <span>
                  <img
                    src={SPMS_LOGO}
                    alt="SPMS Logo"
                    className="experience__logo experience__logo--saturate"
                  />
                </span>
                <h3 className="experience__title">Software Consultant</h3>
                <a
                  href="https://www.spms.min-saude.pt/2020/07/pem/#googtrans(pt%7Cen)"
                  target="_blank"
                  rel="noreferrer"
                  className="experience__subtitle"
                >
                  Shared Services for Portuguese Ministry of Health
                  <FiLink className="experience__hyperlink" />
                </a>
                <div className="experience__calendar">
                  <BsCalendar3 className="experience__calendar-icon" /> 05/2020
                  - 06/2022
                </div>
              </div>
            </div>

            {/* QUALIFICACAO 4 */}
            <div className="experience__data">
              <div className="experience__data--odd">
                <span>
                  <img
                    src={DATAMON_LOGO}
                    alt="Datamon Logo"
                    className="experience__logo experience__logo--saturate"
                  />
                </span>
                <h3 className="experience__title">Software Consultant</h3>
                <a
                  href="https://datamonplus.com/pt-pt/"
                  target="_blank"
                  rel="noreferrer"
                  className="experience__subtitle"
                >
                  DatamonPlus
                  <FiLink className="experience__hyperlink" />
                </a>
                <div className="experience__calendar">
                  <BsCalendar3 className="experience__calendar-icon" /> 11/2019
                  - 05/2020
                </div>
              </div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>

            {/* QUALIFICACAO 5 */}
            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
              </div>
              <div>
                <span>
                  <img
                    src={ETM_LOGO}
                    alt="ETM Logo"
                    className="experience__logo"
                  />
                </span>
                <h3 className="experience__title">Software Consultant</h3>
                <a
                  href="https://textilmaganha.com/en/"
                  target="_blank"
                  rel="noreferrer"
                  className="experience__subtitle"
                >
                  Maganha Textile
                  <FiLink className="experience__hyperlink" />
                </a>
                <div className="experience__calendar">
                  <BsCalendar3 className="experience__calendar-icon" /> 02/2019
                  - 10/2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
