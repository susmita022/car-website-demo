// ModalForm.js

import React, { useState } from "react";
import "./ModalForm.css";

const ModalForm = ({ isOpen, onClose, formType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 7 characters long and contain an uppercase letter, a number, and a special character."
      );
      return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

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
      console.log("Phone:", phone);
    }
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setConfirmPassword("");
    setPhone("");
    setError("");
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  return (
    isOpen && (
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="close-btn-container">
            <img
              src="/images/cancel.png"
              alt="Close"
              className="close-btn"
              onClick={handleClose}
            />
          </div>
          <img src="images/msil-logo.jpg" alt="Maruti Logo" className="msil" />
          <p className="heading">
            {formType === "login" ? "Log in to your account" : "Register here"}
          </p>
          <form onSubmit={handleSubmit}>
            {/* Rest of the form code remains the same */}
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
                    id="phone"
                    name="phone"
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
                {error && (
                  <div className="error-message">
                    <img src="/images/error.png" alt="." className="errorimg" />{" "}
                    {error}
                  </div>
                )}
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
    )
  );
};

export default ModalForm;
