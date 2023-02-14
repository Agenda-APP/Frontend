import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ThemeType = {
  theme: string;
};

const initialState: ThemeType = {
  theme: localStorage.getItem("app-theme") || "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
      localStorage.setItem("app-theme", action.payload);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
