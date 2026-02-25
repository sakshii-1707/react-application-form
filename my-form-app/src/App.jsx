import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    address: "",
    state: "",
    skills: []
  });

  const statesList = [
    "Jharkhand",
    "Punjab",
    "Delhi",
    "Maharashtra",
    "Karnataka"
  ];

  const skillsList = ["C", "C++", "Java", "Python", "React"];

  // ✅ Get today's date (for max date restriction)
  const today = new Date().toISOString().split("T")[0];

  // Handle text, date, radio, select inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle checkbox inputs
  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value]
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== value)
      });
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const todayDate = new Date();
    const birthDate = new Date(formData.dob);

    // ❌ Extra validation: prevent future DOB manually
    if (birthDate > todayDate) {
      alert("Date of Birth cannot be in the future!");
      return;
    }

    // ✅ Calculate Age
    let age = todayDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = todayDate.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && todayDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    alert(
      `First Name: ${formData.firstName}
Last Name: ${formData.lastName}
DOB: ${formData.dob}
Age: ${age} years
Gender: ${formData.gender}
Address: ${formData.address}
State: ${formData.state}
Skills: ${formData.skills.join(", ")}`
    );
  };

  // Handle cancel button
  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      address: "",
      state: "",
      skills: []
    });
  };

  return (
    <div className="container">
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            max={today}   // 🚫 prevents selecting future dates
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            placeholder="Enter your full address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            {statesList.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Skills</label>
          <div className="checkbox-group">
            {skillsList.map((skill, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={skill}
                  checked={formData.skills.includes(skill)}
                  onChange={handleSkillChange}
                />
                {skill}
              </label>
            ))}
          </div>
        </div>

        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;