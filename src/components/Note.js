import React, { useContext, useEffect } from "react";
import NotesContext from "../context/notes-context";
import actions from "../actions/actionTypes";

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);

  const removeNote = title => {
    dispatch({ type: actions.removeNoteAction, title });
  };

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

export default Note;
