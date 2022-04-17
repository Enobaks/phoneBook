import React, { useContext } from 'react'
import {PhoneBook} from "../context/BookContext";

const ContactLog = () => {
    const { contactList } = useContext(PhoneBook)
    console.log(contactList)
  return (
    // <div className="phoneList">
    //     {contactList.map(contact, index => {
    //         <div className="contact" key={index}>
    //             <p>First name: {contact.FirstName}</p>
    //         </div>
    //     })}
    // </div>
    <p>Hello</p>
  )
}

export default ContactLog