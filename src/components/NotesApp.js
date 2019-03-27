import React, { useEffect, useReducer, useState } from "react";
import actions from "../actions/actionTypes";
import notesReducer from "../reducers/notes.reducer";
import Note from "./Note";

const NotesApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    dispatch({ type: actions.addNoteAction, note: { title, body } });
    setTitle("");
    setBody("");
  };

  const removeNote = title => {
    dispatch({ type: actions.removeNoteAction, title });
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));

    if (notes) {
      dispatch({ type: actions.populateNotesAction, notes });
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

export default NotesApp;
