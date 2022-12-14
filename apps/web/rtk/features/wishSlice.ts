import { createSlice } from "@reduxjs/toolkit";

export type WishState = {
  id: number;
  title: string;
  img: string;
};

export interface WishStateType {
  wish: WishState[];
}

const initialState: WishStateType = {
  wish: [
    {
      id: 1,
      title: "",
      img: "",
    },
  ],
};

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addwish(state, action) {
      state.wish.push(action.payload);
    },
    delwish(state, action) {
      const data = state.wish.filter((item) => item.id !== action.payload);
      state.wish = data;
    },
  },
});

const { actions, reducer } = wishSlice;
export const { addwish, delwish } = actions;
export default reducer;
