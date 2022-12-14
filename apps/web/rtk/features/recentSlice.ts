import { createSlice, current } from "@reduxjs/toolkit";
export interface RecentStateType {
  recent: [
    {
      id: number;
      title: string;
      img: string;
    }
  ];
}

const initialState: RecentStateType = {
  recent: [{ id: 1, title: "", img: "" }],
}; // 처음에는 빈 배열로 시작

const recentSlice = createSlice({
  name: "recent",
  initialState,
  reducers: {
    addRecent(state, action) {
      if (current(state.recent).length <= 5) {
        state.recent.push(action.payload);
      } else {
        state.recent.shift();
      }
    },
  },
});

const { actions, reducer } = recentSlice;
export const { addRecent } = actions;
export default reducer;
