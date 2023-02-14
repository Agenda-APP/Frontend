import { Dispatch, SetStateAction } from "react";

export interface ISignUp {
  name: string;
  email: string;
  password: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISign {
  setType: Dispatch<SetStateAction<"login" | "register">>;
}
