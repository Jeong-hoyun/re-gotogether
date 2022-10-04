import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    addData: (state) => {
      state.value += 1;
    },
    putData: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addData, putData } = apiSlice.actions;

export default apiSlice.reducer;
