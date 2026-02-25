import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = (e) => {
    e.preventDefault();

    let isValid = true;

    // Trim spaces
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // ✅ Professional Email Regex (allows numbers + all domains)
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // ✅ Strong Password Regex
    // Must start with capital
    // Must contain at least 1 number
    // Must contain at least 1 special character
    // Minimum 5 characters
    const passwordPattern =
      /^[A-Z](?=.*[0-9])(?=.*[\W_]).{4,}$/;

    setEmailError("");
    setPasswordError("");

    if (!emailPattern.test(trimmedEmail)) {
      setEmailError("Enter a valid email (example@gmail.com)");
      isValid = false;
    }

    if (!passwordPattern.test(trimmedPassword)) {
      setPasswordError(
        "Password must start with capital, contain a number, special character & minimum 5 characters."
      );
      isValid = false;
    }

    if (isValid) {
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div className="container">
      <form onSubmit={validateForm}>
        <h2>Login Form</h2>

        <label>Email ID</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <p className="error">{emailError}</p>

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <p className="error">{passwordError}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;