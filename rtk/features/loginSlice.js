import { createSlice,createAsyncThunk ,current} from "@reduxjs/toolkit";
import  axios  from 'axios';
const initialState = { login: [] }; // 처음에는 빈 배열로 시작

export const fetchByLogin = createAsyncThunk(
  'users/fetchByLogin',
  async (data, { rejectWithValue }) => {
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
      return res.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  
  }
)


const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {    
    logout(state) {
      state.login = { login: [] };
    },
  },  
  extraReducers: (builder) => {
    builder
    .addCase(fetchByLogin.pending, (state) => {})
    .addCase(fetchByLogin.fulfilled, (state, action) => {
      state.login = action.payload;
    })
  },
});

const { actions, reducer } = loginSlice;
export const { login, logout } = actions;
export default reducer;
