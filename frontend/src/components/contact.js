// frontend/src/components/contact.js


import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import "./contact.css";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your form submission logic goes here
    try {
      const response = await axios.post("http://localhost:5000/api/contact/submit-contact-form", {
        firstName,
        lastName,
        email,
        subject,
        message
      });
      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("Message sent successfully");
        history.push("")

      } else {
        // Handle error, e.g., show an error message
        console.error("Failed to send message");
        history.push("")
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact-us-container">
      <div className="side-part">
        <h1>Feel Free to Get in Touch</h1>
        <br />
        <p>
          With our cars, we aim to give you an experience that makes you look
          forward to driving them. Therefore, if there’s anything we can do to
          improve your drives, please don’t hesitate to contact us.
        </p>
        <br />
        <div className="contact-info">
          <div className="each-contact">
            {" "}
            <div>
              <img src="./images/mail.png" alt="mail" />{" "}
            </div>
            <div className="cont-details">
              {" "}
              For any queries, information or feedback, write to us at:{" "}
              <a href="mailto:contact@nexaexperience.com">
                contact@nexaexperience.com{" "}
              </a>
            </div>
          </div>

          <div className="each-contact">
            {" "}
            <div>
              <img src="./images/call2.png" alt="call" />{" "}
            </div>
            <div className="cont-details">
              {" "}
              Get the support you need: <br />
              <a href="tel:1800-102-6392">1800-102-6392 </a> |{" "}
              <a href="tel:1800-200-6392">1800-200-6392 </a>
            </div>
          </div>

          <div className="each-contact">
            {" "}
            <div>
              <img src="./images/fb.png" alt="call" />{" "}
            </div>
            <div className="cont-details">
              {" "}
              Connect with us on: <br />
              <a
                href="https://www.facebook.com/MarutiSuzukiOfficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                facebook.com/MarutiSuzukiOfficial
              </a>
            </div>
          </div>

          <div className="each-contact">
            {" "}
            <div>
              <img src="./images/newspaper.png" alt="call" />{" "}
            </div>
            <div className="cont-details">
              {" "}
              Corporate Communications, Maruti Suzuki India Limited, 1, Nelson
              Mandela Road, Vasant Kunj, New Delhi, India <br />
              <a href="mailto:corp.comm@maruti.co.in">
                corp.comm@maruti.co.in{" "}
              </a>{" "}
              |
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
