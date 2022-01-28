import axios from "axios";
import React, { useState } from "react";

function AddNote(props) {
  const [newNote, setNote] = useState("");
  const [notes, setNotes] = useState(props.notes);

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    };

    axios
      .post("http://localhost:3001/notes", newObject)
      .then((res) => {
        setNotes(notes.concat(res.data));
        setNote("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Content</label>
        <input type="text" value={newNote} onChange={handleChange}></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNote;
