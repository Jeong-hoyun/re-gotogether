import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  isAsyncThunkAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { typeLoginData, typeLoginResponse } from "../../types/common";

export interface LoginStateType {
  login: {
    username: string;
    email: string;
    insertDate: number;
  };
}

const initialState: LoginStateType = {
  login: {
    username: "",
    email: "",
    insertDate: 0,
  },
};

export const fetchByLogin = createAsyncThunk<typeLoginResponse, typeLoginData>(
  "users/fetchByLogin",
  async (data) => {
    try {
      const url = `/ec2/login`;
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        data: JSON.stringify(data),
        withCredentials: true,
        url,
      };
      const res = await axios(options);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout(state) {
      state.login = {
        username: "",
        email: "",
        insertDate: 0,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchByLogin.pending, (state) => {})
      .addCase(fetchByLogin.fulfilled, (state, action) => {
        state.login = action.payload;
      });
  },
});

const { actions, reducer } = loginSlice;
export const { logout } = actions;
export default reducer;
