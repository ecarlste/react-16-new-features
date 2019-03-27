import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const NotesApp = () => {
  const notesData = JSON.parse(localStorage.getItem("notes"));
  const [notes, setNotes] = useState(notesData || []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    setNotes([...notes, { title, body }]);
    setTitle("");
    setBody("");
  };

  const onRemove = title => {
    setNotes(notes.filter(note => note.title !== title));
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  });

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
          <div key={note.title}>
            {note.title}
            {note.body}
            <button onClick={() => onRemove(note.title)}>x</button>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<NotesApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
