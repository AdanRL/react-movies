import { createSlice } from "@reduxjs/toolkit";

export const trackedSlice = createSlice({
  name: "trackedMovies",
  initialState: {
    trackedList: []
  },
  reducers: {
    addTrackedList: (state, action) => {
      state.trackedList = state.trackedList.concat(action.payload);
    },
    removeTrackedList: (state, action) => {
      state.trackedList = state.trackedList.filter((movie) => movie !== action.payload);
    }
  }
});

export const {addTrackedList, removeTrackedList} = trackedSlice.actions;
export default trackedSlice.reducer;
