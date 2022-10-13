import { createSlice } from "@reduxjs/toolkit";

const initialState = { wish: [{ id: 1 }] }; // 처음에는 빈 배열로 시작

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addwish(state, action) {
      state.wish.push(action.payload);
    },
    delwish(state, action) {
      state.wish = state.wish.filter((item) => item.id !== action.payload);
    },
  },
});

const { actions, reducer } = wishSlice;
export const { addwish, delwish } = actions;
export default reducer;
