import actions from "../actions/actionTypes";

export default (state, action) => {
  switch (action.type) {
    case actions.populateNotesAction:
      return action.notes;
    case actions.addNoteAction:
      return [...state, action.note];
    case actions.removeNoteAction:
      return state.filter(note => note.title !== action.title);
    default:
      return state;
  }
};
