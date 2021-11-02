import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchCategory: "",
  searchTerm: "",
  searchResult: {},
  activeDay: 0,
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
    getData: (state, action) => {
      state.searchResult = action.payload;
    },
    changeActiveDay: (state, action) => {
      state.activeDay = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCategory, changeTerm, getData, changeActiveDay } =
  searchSlice.actions;

export default searchSlice.reducer;
