import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import notesArray from '../data/notes.json'
import { TData } from '../type'

type TStateNotes = {
  notes: TData[]
}
const initialState: TStateNotes = { notes: notesArray }

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<TData>) {
      state.notes = [...state.notes, action.payload]
    },
    editNote(state, action: PayloadAction<TData>) {
      state.notes = state.notes.map((note: TData) =>
        note.id === action.payload.id ? action.payload : note
      )
    },
    deleteNote(state, action: PayloadAction<string>) {
      state.notes = state.notes.filter((note) => {
        return note.id !== action.payload
      })
    },
    deleteAllNotes(state) {
      state.notes = []
    },
    toggleArchiveNote(state, action: PayloadAction<string>) {
      const toggleNote = state.notes.find((note) => note.id === action.payload)
      if (toggleNote) {
        toggleNote.archived = !toggleNote.archived
      }
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
