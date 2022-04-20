import React, { useState, createContext } from 'react'

export const PhoneBook = createContext()

const BookContext = (props) => {
    const [contactList, setContactList] = useState([])
    // let contactList = []
  return (
    <PhoneBook.Provider value={{contactList, setContactList}}>
        {props.children}
    </PhoneBook.Provider>
  )
}

export default BookContext