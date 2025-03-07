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
    <div className="bg-blue-200 py-12 ">
      <div className="flex flex-col w-[90%] lg:w-full mx-auto items-center ">

        <h3 className='text-white font-medium tracking-[.2em] lg:tracking-[.4em] uppercase text-sm py-3 lg:py-4'>35,000+ already joined</h3>
        <h1 className="text-white text-2xl font-semibold tracking-normal lg:tracking-widest text-center py-2 lg:py-6">Stay up-to-date with what <br /> we’re doing</h1>

        <div className="flex flex-col lg:flex-row w-[100%] lg:w-fit gap-6 py-4">
          < input type="email" placeholder="Enter your email address" className="p-3 border-none rounded-md" onChange={handleChange}/>
          <button className="bg-softRed text-white p-3 text-sm rounded-md ">Contact Us</button>
        </div>

      </div>
    </div>
  );
};

export default Contact;
