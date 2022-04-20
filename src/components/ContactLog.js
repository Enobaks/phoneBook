import React, { useContext } from "react";
import { PhoneBook } from "../context/BookContext";
import "./contactLog.css";

const ContactLog = () => {
  const { contactList } = useContext(PhoneBook);
  console.log(contactList);
  return (
    <div className="phoneList">
      <h3>Contact Lists</h3>
      {contactList.map(({ FirstName, LastName, PhoneNo }) => (
        <div key={PhoneNo}>
          <p>First Name: <b>{FirstName}</b></p>
          <p>Last Name: <b>{LastName}</b></p>
          <p>Phone No: <b>{PhoneNo}</b></p>
        </div>
      ))}
    </div>
  );
};

export default ContactLog;
