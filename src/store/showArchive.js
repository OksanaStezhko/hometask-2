import { createSlice } from '@reduxjs/toolkit'

//I added showArchive to the store to save value when navigating pages without LocalStorage

const showArchiveSlice = createSlice({
  name: 'showArchive',
  initialState: {
    show: false,
  },
  reducers: {
    toggleShowArchive(state, action) {
      state.show = !state.show
    },
  },
})

export const { toggleShowArchive } = showArchiveSlice.actions

export default showArchiveSlice.reducer
