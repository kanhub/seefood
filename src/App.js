import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Particles from "react-particles-js";
import Logo from "./components/Logo/Logo";
import Footer from "./components/Footer/Footer";
import ImageSearchHandler from "./components/ImageSearchHandler/ImageSearchHandler";
import Welcome from "./components/Welcome/Welcome";
import particlesOptions from "./utils/particlesOptions";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <Logo />
      <Welcome />
      <ImageSearchHandler />
      <Footer />
    </div>
  );
};

export default App;
