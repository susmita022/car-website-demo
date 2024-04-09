import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TestDriveForm.css";

function TestDriveForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredModel, setPreferredModel] = useState("");
  const [selectTransmission, setSelectTransmission] = useState("");
  const [testDrive, setTestDrive] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(null); // State to hold selected date
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDate && selectedDate.getDay() === 0) {
      setErrorMessage("Test drives are not available on Sundays.");
      return;
    }
    console.log("Form submitted:", {
      name,
      email,
      phone,
      preferredModel,
      selectedDate,
    });
    // Reset error message
    setErrorMessage("");
  };

  return (
    <div className="test-drive-container">
      <div className="intro-column">
        <p className="test_heading">Request a Test Drive</p>
        <p className="text-cont">
          Explore and Experience the world of premium, hybrid and powerful
          driving.
        </p>
        <br />
        <p className="text-cont">
          Turning an entire country’s need for driving, into its love for
          driving.
        </p>
        <br />
        <h3>Select Model</h3>
        <br />
        <label htmlFor="preferredModel">Preferred Model:</label>
        <select
          id="preferredModel"
          value={preferredModel}
          onChange={(e) => setPreferredModel(e.target.value)}
          required
        >
          <option value="">Select a model</option>
          <option value="Invicto">Invicto</option>
          <option value="Fronx">Fronx</option>
          <option value="Jimny">Jimny</option>
          <option value="Grand Vitara">Grand Vitara</option>
          <option value="Ignis">Ignis</option>
        </select>
        <br />
        <div>
          <img src="/images/booktest.webp" alt="banner" />
        </div>
      </div>
      <div className="form-column">
        <p className="test_heading">Enter Booking Details</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phone" className="booklabel">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label htmlFor="selectTransmission">Select Transmission:</label>
          <select
            id="selectTransmission"
            value={selectTransmission}
            onChange={(e) => setSelectTransmission(e.target.value)}
            required
          >
            <option value="">Select transmission</option>
            <option value="manual">Manual</option>
            <option value="automatic">Automatic</option>
          </select>

          <label htmlFor="selectedDate">Select Date:</label>
          <br />
          <DatePicker
            id="selectedDate"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date"
            required
          />
          <br />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <br />
          <label htmlFor="preferredTime">Select Time Slot:</label>
          <select
            id="preferredTime"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            required
          >
            <option value="">Select time slot</option>
            <option value="manual">11AM - 3PM</option>
            <option value="automatic">3PM - 7PM</option>
          </select>
          <label htmlFor="testDrive">Test Drive at:</label>
          <select
            id="testDrive"
            value={testDrive}
            onChange={(e) => setTestDrive(e.target.value)}
            required
          >
            <option value="">Test Drive at</option>
            <option value="manual">Show Room</option>
            <option value="automatic">Doorstep</option>
          </select>
          <br />
          <button type="submit" className="test_submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default TestDriveForm;
