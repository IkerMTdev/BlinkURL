import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shortener from "./components/Shortener";
import video from "./assets/videos/background.mp4";

const App = () => {
  return (
    <div>
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      <Header />
      <Shortener />
      <Footer />
    </div>
  );
};

export default App;
