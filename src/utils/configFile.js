import { createSlice } from "@reduxjs/toolkit";

const configFile = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = configFile.actions;
export default configFile.reducer;
