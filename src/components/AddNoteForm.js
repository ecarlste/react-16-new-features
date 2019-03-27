import React, { useContext, useState } from "react";
import actions from "../actions/actionTypes";
import NotesContext from "../context/notes-context";

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    dispatch({ type: actions.addNoteAction, note: { title, body } });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <textarea value={body} onChange={e => setBody(e.target.value)} />
      <button>Add Note</button>
    </form>
  );
};

export default AddNoteForm;
