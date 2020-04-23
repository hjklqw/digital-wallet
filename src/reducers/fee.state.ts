import { FeeModel } from '../models/fee.model';

export interface FeeState {
  fees: FeeModel[],
  isLoading: boolean,
  hasLoaded: boolean,
  error: Error | null
}