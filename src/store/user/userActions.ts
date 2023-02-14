import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthResponse } from "./user.interface";
import { ISignIn, ISignUp } from "../../components/Auth/auth.interface";
import { AuthService } from "../../services/auth/auth.service";

export const register = createAsyncThunk<IAuthResponse, ISignUp>(
  "authorization/signup",
  async ({ name, email, password }) => {
    try {
      const response = await AuthService.register(name, email, password);
      return response.data;
    } catch (e) {
      throw new Error();
    }
  }
);

export const login = createAsyncThunk<IAuthResponse, ISignIn>(
  "authorization/login",
  async ({ email, password }) => {
    try {
      const response = await AuthService.login(email, password);
      return response.data;
    } catch (e) {
      throw new Error();
    }
  }
);
export const logout = createAsyncThunk("authorization/logout", async () =>
  AuthService.logout()
);
