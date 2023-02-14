import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "./tasks/tasksSlice";
import themeSlice from "./themeSlice";
import modalSlice from "./modalSlice";
import authSlice from "./user/authSlice";

export const store = configureStore({
  reducer: {
    tasksList: taskReducer,
    themeToggle: themeSlice,
    toggleModal: modalSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
