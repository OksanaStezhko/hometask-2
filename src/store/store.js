import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './notesSlice'
import showArchive from './showArchive'

export default configureStore({
  reducer: {
    notes: notesReducer,
    showArchive: showArchive,
  },
})
