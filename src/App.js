import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import axios from "axios";
import AddNote from "./components/AddNote";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/notes")
      .then((res) => setNotes(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <AddNote notes={notes} />
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default App;
