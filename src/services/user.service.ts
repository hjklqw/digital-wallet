import * as actions from '../actions/user.actions';
import database from '../assets/database';
import { load } from './utils';
import { UserModel } from '../models/user.model';
import { LoginFormModel } from '../components/forms/login/loginForm.model';
import { WalletModel } from '../models/wallet.model';

export async function loginUser(postData: LoginFormModel) {
  function res() {
    const user = database.user.find(u => (u.username === postData.username) && (u.password === postData.password));
    if (user == null) return new Error(`Invalid login credentials.`);
    const wallet = database.wallet.find(w => w.customerId === user.id);
    if (wallet == null) return new Error(`Unable to find associated wallet.`);
    return {
      user: user,
      wallet: wallet
    };
  }
  return await load<actions.UserLoginResponse>(actions.fetchUser, actions.fetchUserSuccess, actions.fetchUserFailure, res);
}

export async function createUser(postData: UserModel) {
  function postDataIsValid() {
    return true; // This would come from the server, but we are faking it
  }
  function res() {
    if (postDataIsValid()) {
      postData.id = database.user.length; // This should come from the server
      database.user.push(postData);
      const wallet: WalletModel = {
        customerId: postData.id,
        balance: 0,
        numTransactions: 0
      };
      database.wallet.push(wallet);
      return {
        user: postData,
        wallet: wallet
      };
    }
    return new Error('Invalid data. User was not created.');
  }
  return await load<actions.UserLoginResponse>(actions.createUser, actions.createUserSuccess, actions.createUserFailure, res);
}

export async function updateUser(postData: UserModel) {
  function postDataIsValid() {
    return true; // Ditto--we already have server-side validation
  }
  function res() {
    if (postDataIsValid()) {
      const index = database.user.findIndex(u => u.id === postData.id);
      if (index !== -1) {
        database.user[index] = postData;
      }
      return postData;
    }
    return new Error('Invalid data. User was not created');
  }
  return await load<UserModel>(actions.updateUser, actions.updateUserSuccess, actions.updateUserFailure, res);
}