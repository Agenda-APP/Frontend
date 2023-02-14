import axios from "axios";

import { API_URL, getAuthUrl } from "../../configs/api.configs";

import { IAuthResponse } from "../../store/user/user.interface";

import { removeToken, saveToStorage } from "./auth.helper";

export const AuthService = {
  async register(name: string, email: string, password: string) {
    const response = await axios.post<IAuthResponse>(
      `${API_URL}${getAuthUrl("/signup")}`,
      { name, email, password }
    );
    if (response.data.access_token) {
      saveToStorage(response.data);
    }
    return response;
  },

  async login(email: string, password: string) {
    const response = await axios.post<IAuthResponse>(
      `${API_URL}${getAuthUrl("/login")}`,
      { email, password }
    );
    if (response.data.access_token) {
      saveToStorage(response.data);
    }
    return response;
  },

  logout() {
    removeToken();
    localStorage.removeItem("user");
  },
};
