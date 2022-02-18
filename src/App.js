import React, { useEffect } from "react";
import Faqs from "./components/accordion/Faqs";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Download from "./components/Download";
import Features from "./components/features/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import scrollreveal from "scrollreveal";
const App = () => {
  useEffect(() => {
    const animationEffect = () => {
      const sr = scrollreveal({
        origin: "top",
        distance: "60px",
        duration: 2500,
        delay: 400,
        reset: false,
      });
      sr.reveal(
        `.header,.banner,.heading,.features,.download, article,.contact,.footer`,
        {
          interval: 500,
        }
      );
    };

    animationEffect();
    return () => {
      animationEffect();
    };
  }, []);
  return (
    <div>
      <Header />
      <Banner />
      <Features />
      <Download />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
