import { User } from './enums';

export interface LoginPayload {
  [User.Email]: string;
  [User.Password]: string;
}

export interface IUser {
  [User.Id]: number;
  [User.Avatar]: string;
  [User.Name]: string;
  [User.Email]: string;
  [User.Gender]: string;
  [User.State]: string;
  [User.Birthday]: string;
  [User.Password]: string;
}
