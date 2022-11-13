import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { typeReservation } from "../../types/common";

export interface CancelDataType {
  CancelData: {
    paymentState: number;
  };
}

const initialState: CancelDataType = {
  CancelData: {
    paymentState: 0,
  },
};

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export const fetchByReservationCancel = createAsyncThunk<
  typeReservation,
  number
>("cancel/fetchByReservationCancel", async (path) => {
  try {
    const res = await axios.patch(`/ec2/reservations/${path}/state`, {
      cancelToken: source.token,
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      data: { paymentState: 3 },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
});

const cancelSlice = createSlice({
  name: "cancel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchByReservationCancel.pending, (state) => {})
      .addCase(fetchByReservationCancel.fulfilled, (state, action) => {
        state.CancelData = action.payload;
      });
  },
});

const { reducer } = cancelSlice;
export default reducer;
