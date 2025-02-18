import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import video from "./assets/videos/background.mp4";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";

const App = () => {
  return (
    <Router>
      <div id="app">
        <video id="video-background" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;