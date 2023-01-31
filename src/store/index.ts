import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "./tasksSlice";
import themeSlice from "./themeSlice";

export const store = configureStore({
  reducer: {
    tasksList: taskReducer,
    themeToggle: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
