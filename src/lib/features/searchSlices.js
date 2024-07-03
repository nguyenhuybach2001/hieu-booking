import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripId: null,
  modalDetail: false,
  dataTrip: [],
  searchInfo:{}
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addTripId: (state, action) => {
      state.tripId = action.payload;
    },
    addDataTrip: (state, action) => {
      state.dataTrip = action.payload;
    },
    handleModal: (state, action) => {
      state.modalDetail = action.payload;
    },
    addSearch: (state, action) => {
      state.searchInfo = action.payload;
    }

  },
});
export const { addTripId, handleModal,addDataTrip,addSearch } = searchSlice.actions;

export default searchSlice.reducer;
