import { createSlice } from "@reduxjs/toolkit";

const initialState = { login: [] }; // 처음에는 빈 배열로 시작

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      state.login = action.payload;
    },
    logout(state, action) {
      state.login = { login: [] };
    },
  },
});

const { actions, reducer } = loginSlice;
export const { login, logout } = actions;
export default reducer;
