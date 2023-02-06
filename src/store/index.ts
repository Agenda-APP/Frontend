import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "./tasksSlice";
import themeSlice from "./themeSlice";
import modalSlice from "./modalSlice";

export const store = configureStore({
  reducer: {
    tasksList: taskReducer,
    themeToggle: themeSlice,
    toggleModal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
