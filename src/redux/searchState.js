import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchCategory: "",
  searchTerm: "",
  searchResult: {},
  activeDay: 0,
  coordinates: {}
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.searchCategory = action.payload;
    },
    changeTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setData: (state, action) => {
      state.searchResult = action.payload;
    },
    changeActiveDay: (state, action) => {
      state.activeDay = action.payload;
    },
    setCoordinates: (state, action) => {
      state.coordinates = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCategory, changeTerm, setData, changeActiveDay, setCoordinates } =
  searchSlice.actions;

export default searchSlice.reducer;
