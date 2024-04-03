import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Utilities from "../Utilities";
import Social from "../Social";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Utilities />
      <hr
        style={{
          background: "grey",
          color: "grey",
          borderColor: "grey",
          height: "2px",
          margin: "100px",
        }}
      />
      <Social />
      <Footer />
    </>
  );
}

export default Home;
