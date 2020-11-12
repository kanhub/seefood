import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Particles from "react-particles-js";
import Logo from "./components/Logo/Logo";
import Footer from "./components/Footer/Footer";
import ImageSearchHandler from "./components/ImageSearchHandler/ImageSearchHandler";
import Welcome from "./components/Welcome/Welcome";
import SignIn from "./components/SignIn/SignIn";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import particlesOptions from "./utils/particlesOptions";
import "./App.css";

const App = () => {
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onRouteChange = (aRoute) => {
    if (aRoute === "home") {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
    setRoute(aRoute);
  };

  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation
        isSignedIn={isSignedIn}
        route={route}
        onRouteChange={onRouteChange}
      />
      {route === "home" ? (
        <>
          <Logo />
          <Welcome />
          <ImageSearchHandler />
        </>
      ) : route === "signin" || route === "signout" ? (
        <>
          <Logo />
          <SignIn onRouteChange={onRouteChange} />
        </>
      ) : route === "about" ? (
        <>
          <Logo />
          <About />
        </>
      ) : (
        <>
          <Logo />
          <Register onRouteChange={onRouteChange} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
