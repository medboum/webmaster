import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userRole: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userRole = action.payload
    },
    removeUser: (state) => {
      state.userRole = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer
