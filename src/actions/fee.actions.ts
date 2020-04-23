import * as Constants from './fee.constants';
import { Action } from './base-action';
import { FeeModel } from '../models/fee.model';

export function fetchFees(): Action {
  return { type: Constants.FETCH_FEES };
}

export function fetchFeesSuccess(fees: FeeModel[]): Action {
  return { type: Constants.FFETCH_FEES_SUCCESS, payload: fees };
}

export function fetchFeesFailure(error: Error): Action {
  return { type: Constants.FETCH_FEES_FAILURE, payload: error };
};