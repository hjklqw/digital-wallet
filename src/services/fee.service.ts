import * as actions from '../actions/fee.actions';
import database from '../assets/database';
import { load } from './utils';
import { FeeModel } from '../models/fee.model';

export async function fetchFees() {
  return await load<FeeModel[]>(actions.fetchFees, actions.fetchFeesSuccess, actions.fetchFeesFailure, () => database.fee);
}