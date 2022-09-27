import { createSlice } from '@reduxjs/toolkit'

//I added showArchive to the store to save value when navigating pages without LocalStorage

type TStateShowArchive = {
  show: boolean
}

const initialState: TStateShowArchive = { show: false }

const showArchiveSlice = createSlice({
  name: 'showArchive',
  initialState,
  reducers: {
    toggleShowArchive(state) {
      state.show = !state.show
    },
  },
})

export const { toggleShowArchive } = showArchiveSlice.actions

export default showArchiveSlice.reducer
