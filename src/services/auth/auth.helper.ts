import Cookies from "js-cookie";
import { IAuthResponse, IToken } from "../../store/user/user.interface";

export const saveTokensStorage = (data: IToken) => {
  Cookies.set("accessToken", data.access_token);
};

export const saveToStorage = (data: IAuthResponse) => {
  saveTokensStorage(data);
  localStorage.setItem("user", JSON.stringify(data.user));
};

export const removeToken = () => {
  Cookies.remove("accessToken");
};
