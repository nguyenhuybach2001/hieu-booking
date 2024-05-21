import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripId: null,
  modalDetail: false,
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addTripId: (state, action) => {
      state.tripId = action.payload;
    },
    handleModal: (state, action) => {
      state.modalDetail = action.payload;
    },
  },
});
export const { addTripId, handleModal } = searchSlice.actions;

export default searchSlice.reducer;
