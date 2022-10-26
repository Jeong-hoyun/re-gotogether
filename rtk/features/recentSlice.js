import { createSlice } from "@reduxjs/toolkit";

const initialState = { recent: [{}] }; // 처음에는 빈 배열로 시작

const recentSlice = createSlice({
  name: "recent",
  initialState,
  reducers: {
    addRecent(state, action) {
       state.recent.push(action.payload);
    },
  },
});

const { actions, reducer } = recentSlice;
export const { addRecent } = actions;
export default reducer;