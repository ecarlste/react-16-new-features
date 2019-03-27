import React from "react";
import Note from "./Note";

const NoteList = ({ notes, removeNote }) => {
  return (
    <div>
      {notes.map(note => (
        <Note key={note.title} note={note} removeNote={removeNote} />
      ))}
    </div>
  );
};

export default NoteList;
