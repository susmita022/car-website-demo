// frontend/src/components/Navbar.js

import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ModalForm from "./ModalForm";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // Track the type of modal to display

  const handleClick = () => {
    setClick(!click);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const handleModalOpen = (type) => {
    setShowModal(true);
    setModalType(type);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setModalType("");
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src="images/maruti-logo.png"
              alt="Maruti Logo"
              className="logo-image"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/Services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contactUs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => handleModalOpen("signup")}
              >
                {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => handleModalOpen("login")}
              >
                {button && <Button buttonStyle="btn--outline">Log in</Button>}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ModalForm
        isOpen={showModal}
        onClose={handleModalClose}
        formType={modalType}
      />
    </>
  );
}

export default Navbar;
