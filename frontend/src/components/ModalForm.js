

import React, { useState } from "react";
import "./ModalForm.css";

const ModalForm = ({ isOpen, onClose, formType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission
    if (formType === "login") {
      console.log("Login Form Submitted:");
      console.log("Email:", email);
      console.log("Password:", password);
    } else if (formType === "signup") {
      console.log("Signup Form Submitted:");
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
      console.log("Age:", phone);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src="images/msil-logo.jpg" alt="Maruti Logo" className="msil" />
        <p className="heading">
          {formType === "login" ? "Log in to your account" : "Register here"}
        </p>
        <form onSubmit={handleSubmit}>
          {formType === "signup" && (
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          )}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {formType === "signup" && (
              <div className="form-group">
                <label htmlFor="phone">Mobile Number:</label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            )}
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {formType === "signup" && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}
          </div>
          <div className="button-group">
            <button type="submit" className="buttonn">
              {formType === "login" ? "Log In" : "Sign Up"}
            </button>
            <>
              <button type="button" className="google-btn">
                <img
                  src="images/google.png"
                  alt="google Logo"
                  className="google"
                />{" "}
                {formType === "login"
                  ? "Log In with Google"
                  : " Continue with Google"}
              </button>
            </>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
