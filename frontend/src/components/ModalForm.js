// frontend/src/components/ModalForm.js

import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from "axios"
import "./ModalForm.css";

const ModalForm = ({ isOpen, onClose, formType }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  //   event.preventDefault();
  //   // Here you can handle form submission
  //   if (formType === "login") {
  //     console.log("Login Form Submitted:");
  //     console.log("Email:", email);
  //     console.log("Password:", password);
  //   } else if (formType === "signup") {
  //     console.log("Signup Form Submitted:");
  //     console.log("First Name:", firstName);
  //     console.log("Last Name:", lastName);
  //     console.log("Email:", email);
  //     console.log("Password:", password);
  //     console.log("Confirm Password:", confirmPassword);
  //     console.log("Age:", phone);
  //   }
  //   onClose();
  // };
  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (formType === "signup") {
        const response = await axios.post("http://localhost:5000/api/users/register", {
          name,
          email,
          password,
          state,
          city
        });

        console.log("Sign up successful:", response.data);
        // Handle success - redirect user, show success message, etc.
        history.push('/')
      } else if (formType === "login") {
        const response = await axios.post("http://localhost:5000/api/users/login", {
          email,
          password,
        });

        console.log("Login successful:", response.data);
        // Handle success - redirect user, show success message, etc.
        history.push('/')
      }

      onClose(); // Close the modal
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error - display error message to user, etc.
      // setError(error.response.data.message);
    }
  };
  return (
    isOpen && (
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
                  <label htmlFor="firstName">Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                  <label htmlFor="state">State:</label>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
              )}
              {formType === "signup" && (
                <div className="form-group">
                  <label htmlFor="city">City:</label>
                  <input
                    type="text"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
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
