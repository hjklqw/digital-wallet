import * as Constants from './user.constants';
import { Action } from './base-action';
import { UserModel } from '../models/user.model';
import { WalletModel } from '../models/wallet.model';

export type UserLoginResponse = {
  user: UserModel, 
  wallet: WalletModel
};

export function fetchUser(): Action {
  return { type: Constants.FETCH_USER };
};

export function fetchUserSuccess(data: UserLoginResponse): Action {
  return { type: Constants.FETCH_USER_SUCCESS, payload: data };
};
export function fetchUserFailure(error: Error): Action {
  return { type: Constants.FETCH_USER_FAILURE, payload: error };
};

export function createUser(user: UserModel): Action {
  return { type: Constants.CREATE_USER, payload: user };
};

export function createUserSuccess(data: UserLoginResponse): Action {
  return { type: Constants.CREATE_USER_SUCCESS, payload: data };
};
export function createUserFailure(error: Error): Action {
  return { type: Constants.CREATE_USER_FAILURE, payload: error };
};

export function updateUser(user: UserModel): Action {
  return { type: Constants.UPDATE_USER, payload: user };
};

export function updateUserSuccess(user: UserModel): Action {
  return { type: Constants.UPDATE_USER_SUCCESS, payload: user };
};
export function updateUserFailure(error: Error): Action {
  return { type: Constants.UPDATE_USER_FAILURE, payload: error };
};

export function logoutUser(): Action {
  return { type: Constants.LOGOUT_USER };
}