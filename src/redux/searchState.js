import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchCategory: "",
  searchTerm: "",
  searchResult: {},
  activeDay: 0,
  searchedCoordinates: [73.04, 33.68]
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
    changeSearchedCoordinates: (state, action) => {
      state.searchedCoordinates = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCategory, changeTerm, setData, changeActiveDay, changeSearchedCoordinates } =
  searchSlice.actions;

export default searchSlice.reducer;
