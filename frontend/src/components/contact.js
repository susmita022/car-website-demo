import React, { useState } from "react";
import "./contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
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
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
