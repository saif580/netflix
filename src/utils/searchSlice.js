import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
    movieNames: [],
    movieResults: [],
  },
  reducers: {
    toggleSearchView: (state, action) => {
      state.showSearch = !state.showSearch;
    },
    addGptMoviesResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleSearchView, addGptMoviesResult } = searchSlice.actions;

export default searchSlice.reducer;
