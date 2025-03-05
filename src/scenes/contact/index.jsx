import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email)
  };

  const handleChange = (e) => {
    setEmail(e.target.value);

    if(!validateEmail(e.target.value)) {
      setError("Enter a valid email")
    } else {
      setError("")
    }
  }

  return (
    <div>
      <h3>35,000+ already joined</h3>
      <h1>Stay up-to-date with what we’re doing</h1>

      <div>
        <input type="email" placeholder="example@email.com" onChange={handleChange} />
        <button> Contact Us</button>
      </div>
    </div>
  );
};

export default Contact;
