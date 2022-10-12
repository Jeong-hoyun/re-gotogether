import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from './../../config/index';

export const fetchUserFrom = createAsyncThunk(
  'users/fetchUserFrom',
  async (data) => {
    let cancel;
    const options={
      method: 'post',
      headers: { 'content-type': 'application/json;charset=UTF-8' },
      url: `${API_URL}/login/`,
      data: JSON.stringify(data),
      cancelToken: new axios.CancelToken(c => cancel = c)     
    }
   
    try {
      const response = await axios.post(options);
      return response.data
    } catch (error) {
      if (axios.isCancel(error)) return
    }
    return () => cancel()
  }
)



const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    fetchingUser: false,
    fetchingError: null
  },
  reducers: {},
  extraReducers: {
    [fetchUserFrom.pending]: (state, action) => {
      state.fetchingUser = true;
      state.fetchingError = null;
    },
    [fetchUserFrom.rejected]: (state, action) => {
      state.fetchingUser = false;
      state.fetchingError = action.error;
    }
    [fetchUserFrom.fulfilled]: (state, action) => {
      state.fetchingUser = false;
      state.user = action.payload;
    }
  }
});

const { actions, reducer } = loginSlice;
export const { login, logout } = actions;
export default reducer;
