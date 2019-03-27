import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const populateNotesAction = "POPULATE_NOTES";
const addNoteAction = "ADD_NOTE";
const removeNoteAction = "REMOVE_NOTE";

const notesReducer = (state, action) => {
  switch (action.type) {
    case populateNotesAction:
      return action.notes;
    case addNoteAction:
      return [...state, action.note];
    case removeNoteAction:
      return state.filter(note => note.title !== action.title);
    default:
      return state;
  }
};

const NotesApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    dispatch({ type: addNoteAction, note: { title, body } });
    setTitle("");
    setBody("");
  };

  const removeNote = title => {
    dispatch({ type: removeNoteAction, title });
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));

    if (notes) {
      dispatch({ type: populateNotesAction, notes });
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
