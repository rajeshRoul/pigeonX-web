import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUserData: (state, action) => {
      state = action.payload;
    },
  },
});

// this is for dispatch
export const userActions = userSlice.action;

// this is for configureStore
export default userSlice.reducer;
