import React, { useContext } from "react";
import actions from "../actions/actionTypes";
import NotesContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition.hook";

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

  const removeNote = title => {
    dispatch({ type: actions.removeNoteAction, title });
  };

  return (
    <>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>
        {position.x}, {position.y}
      </p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </>
  );
};

export default Note;
