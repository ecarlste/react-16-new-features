import React, { useEffect, useReducer } from "react";
import actions from "../actions/actionTypes";
import NotesContext from "../context/notes-context";
import notesReducer from "../reducers/notes.reducer";
import AddNoteForm from "./AddNoteForm";
import NoteList from "./NoteList";

const NotesApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

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
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h3>Notes</h3>
      <AddNoteForm />
      <NoteList />
    </NotesContext.Provider>
  );
};

export default NotesApp;
