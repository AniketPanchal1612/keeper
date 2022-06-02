import react, { useState } from "react";

import Header from "./header";
import Note from "./note";
import Footer from "./footer";
import CreateArea from "./createArea";

function App() {
  const [notes, setnotes] = useState([]);
  function addNote(newNote) {
    setnotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note id={index} title={noteItem.title} content={noteItem.content} />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
