import { UserModel } from '../models/user.model';
import { WalletModel } from '../models/wallet.model';

export interface UserState {
  user: UserModel | null,
  wallet: WalletModel | null,
  isLoading: boolean,
  hasLoaded: boolean,
  error: Error | null
};