import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { reservation: [] };

export const fetchByReservation = createAsyncThunk(
  "reservation/fetchByReservation",
  async () => {
    try {
      const res = await axios.get(`/ec2/reservations/user`);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
);

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchByReservation.pending, (state) => {})
      .addCase(fetchByReservation.fulfilled, (state, action) => {
        const { reservations } = action.payload;
        state.reservation = reservations;
      });
  },
});

const { reducer } = reservationSlice;
export default reducer;
