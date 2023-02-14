import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  isAuth: boolean;
}

const initialState: IAuth = {
  isAuth: true,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAuth(state) {
      state.isAuth = !state.isAuth;
    },
  },
});

export const { toggleAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
