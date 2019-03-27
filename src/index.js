import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    setNotes([...notes, { title, body }]);
    setTitle("");
    setBody("");
  };

  const removeNote = title => {
    setNotes(notes.filter(note => note.title !== title));
  };

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));

    if (notesData) {
      setNotes(notesData);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(notes);

    localStorage.setItem("notes", json);
  }, [notes]);

  return (
    <div>
      <h3>Notes</h3>
      <form onSubmit={onSubmit}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={body} onChange={e => setBody(e.target.value)} />
        <button>Add Note</button>
      </form>
      <div>
        {notes.map(note => (
          <Note key={note.title} note={note} removeNote={removeNote} />
        ))}
      </div>
    </div>
  );
};

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log("Note component mounted");

    return () => {
      console.log("Note component unmounted");
    };
  }, []);

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  );
};

ReactDOM.render(<NotesApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
