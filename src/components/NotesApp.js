import React, { useEffect, useReducer } from "react";
import actions from "../actions/actionTypes";
import notesReducer from "../reducers/notes.reducer";
import AddNoteForm from "./AddNoteForm";
import NoteList from "./NoteList";

const NotesApp = () => {
  const [notes, setNotes] = useReducer(notesReducer, []);

  const removeNote = title => {
    setNotes({ type: actions.removeNoteAction, title });
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));

    if (notes) {
      setNotes({ type: actions.populateNotesAction, notes });
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(notes);

    localStorage.setItem("notes", json);
  }, [notes]);

  return (
    <div>
      <h3>Notes</h3>
      <AddNoteForm setNotes={setNotes} />
      <NoteList notes={notes} removeNote={removeNote} />
    </div>
  );
};

export default NotesApp;
