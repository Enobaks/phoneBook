import React, { useState, useContext } from "react";
import "./contactForm.css";
import { PhoneBook } from "../context/BookContext";

const ContactForm = () => {
  const [formInputs, setFormInputs] = useState({});
  const { contactList } = useContext(PhoneBook);
  const handleInput = (e) => {
    // setValue(e.target.value)
    const { name, value } = e.target;
    switch (name) {
      case "FirstName":
        setFormInputs({ ...formInputs, FirstName: value });
        break;
      case "LastName":
        setFormInputs({ ...formInputs, LastName: value });
        break;
      case "PhoneNo":
        setFormInputs({ ...formInputs, PhoneNo: value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // contactList.push(formInputs);
    setFormInputs({
      FirstName: "",
      LastName: "",
      PhoneNo: "",
    });
  };
  return (
    <div className="wrap">
      <div className="title">Contact Form</div>
      <form action="">
        <div className="input-field">
          <label htmlFor="FirstName">First Name:</label>
          <input
            type="text"
            placeholder="Input First Name"
            name="FirstName"
            onChange={handleInput}
          />
        </div>
        <div className="input-field">
          <label htmlFor="LastName">Last Name:</label>
          <input
            type="text"
            placeholder="Input Last Name"
            name="LastName"
            onChange={handleInput}
          />
        </div>
        <div className="input-field">
          <label htmlFor="PhoneNo">Phone No:</label>
          <input
            type="text"
            placeholder="Input Phone No"
            name="PhoneNo"
            onChange={handleInput}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
