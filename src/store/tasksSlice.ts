import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { List } from "../models/tasks.interface";
import { tasksData } from "../Date/tasksData";

type TodosState = {
  tasks: List[];
  currentId: string;
};

const initialState: TodosState = {
  tasks: tasksData,
  currentId: "",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    toggleComplete(state, action: PayloadAction<string>) {
      const toggleTask = state.tasks.find((task) => task.id === action.payload);
      if (toggleTask) {
        toggleTask.isCompleted = !toggleTask.isCompleted;
      }
    },
    removeTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    getCurrentId(state, action: PayloadAction<string>) {
      state.currentId = action.payload;
    },
    toggleDisabled(state, action: PayloadAction<string>) {
      const toggleTask = state.tasks.find((task) => task.id === action.payload);
      if (toggleTask) {
        toggleTask.isDisabled = !toggleTask.isDisabled;
      }
    },
    onChangeValue(state, action: PayloadAction<string>) {
      const toggleTask = state.tasks.find(
        (task) => task.id === state.currentId
      );
      if (toggleTask) {
        toggleTask.value = action.payload;
      }
    },
  },
});

export const {
  toggleDisabled,
  onChangeValue,
  getCurrentId,
  toggleComplete,
  removeTask,
} = taskSlice.actions;

export default taskSlice.reducer;
