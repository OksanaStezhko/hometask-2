import { createSlice } from '@reduxjs/toolkit'
import notesArray from '../data/notes.json'
const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: notesArray,
  },
  reducers: {
    addNote(state, action) {},
    editNote(state, action) {},
    deleteNote(state, action) {},
    archiveNote(state, action) {},
    unarchiveNote(state, action) {},
  },
})

export const { addNote, editNote, deleteNote, archiveNote, unarchiveNote } =
  noteSlice.actions

export default noteSlice.reducer
