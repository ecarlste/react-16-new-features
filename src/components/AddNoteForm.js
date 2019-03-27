import React, { useState } from "react";
import actions from "../actions/actionTypes";

const AddNoteForm = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    setNotes({ type: actions.addNoteAction, note: { title, body } });
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
