import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './notesSlice'
import showArchive from './showArchiveSlice'

const store = configureStore({
  reducer: {
    notes: notesReducer,
    showArchive: showArchive,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
