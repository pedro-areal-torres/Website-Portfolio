import React, { useEffect, useState } from "react";
import "./nav.css";
import scrollActive from "./utils.js";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BsPatchCheck } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";

export const Nav = () => {
  // Default active menu
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    // initiate the event handler
    window.addEventListener("scroll", scrollActive);
    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener("scroll", scrollActive);
    };
  });

  return (
    <nav className="nav__menu">
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsPatchCheck />
      </a>
      <a
        href="#qualification"
        onClick={() => setActiveNav("#qualification")}
        className={activeNav === "#qualification" ? "active" : ""}
      >
        <MdWorkOutline />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};
