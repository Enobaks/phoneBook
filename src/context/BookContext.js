import React, { useState, createContext } from 'react'

export const PhoneBook = createContext()

const BookContext = (props) => {
    const [contactList, setContactList] = useState({})
    // const contactList = {}
  return (
    <PhoneBook.Provider value={{contactList}}>
        {props.child}
    </PhoneBook.Provider>
  )
}

export default BookContext