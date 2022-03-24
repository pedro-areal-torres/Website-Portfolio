import React from "react";
import {
  About,
  Contact,
  Experience,
  Footer,
  Home,
  Nav,
  Portfolio,
  Qualification,
} from "./components/index";
import smoothscroll from 'smoothscroll-polyfill';

const App = () => {
  smoothscroll.polyfill();
  window.__forceSmoothScrollPolyfill__ = true;
  return (
    <div>
      <Home />
      <Nav />
      <About />
      <Experience />
      <Qualification />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
