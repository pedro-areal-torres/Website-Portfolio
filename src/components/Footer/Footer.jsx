import React from "react";
import "./footer.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__documentacion">
        <a href="https://github.com/pedro-areal-torres/Website-Portfolio" target="_blank">
          Website Code · Documentacion
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Pedro Torres 2022</small>
      </div>
    </footer>
  );
};
