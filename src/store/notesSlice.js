import { createSlice } from '@reduxjs/toolkit'
import notesArray from '../data/notes.json'
import { v4 as createID } from 'uuid'

const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: notesArray,
  },
  reducers: {
    addNote(state, action) {
      state.notes = [...state.notes, { id: createID(), ...action.payload }]
    },
    editNote(state, action) {
      state.notes = [
        ...state.notes.filter((note) => note.id !== action.payload),
        action.payload,
      ]
    },
    deleteNote(state, action) {
      state.notes = state.notes.filter((note) => {
        console.log(note.id === action.payload)
        return note.id !== action.payload
      })
    },
    deleteAllNotes(state, action) {
      state.notes = []
    },
    toggleArchiveNote(state, action) {
      const toggleNote = state.notes.find((note) => note.id === action.payload)
      toggleNote.archived = !toggleNote.archived
    },
  },
})

export const {
  addNote,
  editNote,
  deleteNote,
  deleteAllNotes,
  toggleArchiveNote,
} = noteSlice.actions

export default noteSlice.reducer
