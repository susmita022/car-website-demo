// frontend/src/components/pages/SignUp.js


import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Utilities from "../Utilities";
import Social from "../Socials";
import Footer from "../Footer";

function SignUp() {
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

export default SignUp;
