import { IUser } from "../../shared/interface/user.interface";

export interface IToken {
  access_token: string;
}

export interface IAuthResponse extends IToken {
  user: IUser;
}
