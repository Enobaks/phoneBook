import React from "react";
import ContactForm from "./components/ContactForm";
import ContactLog from "./components/ContactLog";
import BookContext from "./context/BookContext";

function App() {
  return (
    <div className="App">
      <BookContext>
        <ContactForm />
        {/* <ContactLog /> */}
      </BookContext>
    </div>
  );
}

export default App;
