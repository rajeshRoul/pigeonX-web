import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    data: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload;
    },
    setUserLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

// this is for dispatch
export const userActions = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;
