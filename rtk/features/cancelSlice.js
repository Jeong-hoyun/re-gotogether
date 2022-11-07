import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import  axios  from 'axios';
const initialState = { CancelData: [] }; 
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export const fetchByReservationCancel = createAsyncThunk(
  'cancel/fetchByReservationCancel',
  async (path) => {
    try {
        const res = await axios.patch(`/ec2/reservations/${path}/state`, {
        cancelToken: source.token,
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        data: { paymentState: 3 },
      });

      return res.data      
    } catch (error) {
     console.error(error)
    }
  
  }
)


const cancelSlice = createSlice({
  name: "cancel",
  initialState,
  reducers: {     
  },  
  extraReducers: (builder) => {
    builder
    .addCase(fetchByReservationCancel.pending, (state) => {})
    .addCase(fetchByReservationCancel.fulfilled, (state, action) => {
        const {reservations}=action.payload
        state.CancelData = reservations;
    })
  },
});

const {  reducer } = cancelSlice;
export default reducer;
