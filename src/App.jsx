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

const App = () => {

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
