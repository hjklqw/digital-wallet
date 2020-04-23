import { TransactionType } from "../../../models/transactionType.enum";
import { FeeModel, FeeApplicationType } from "../../../models/fee.model";

export default function(numTransactions: number, currentBalance: number, fees: FeeModel[], type: TransactionType) {
  const applicableFee = fees
    .filter(f => f.transactionType === type)
    .sort((a, b) => a.numTransactionsThreshold - b.numTransactionsThreshold)
    .find(f => numTransactions > f.numTransactionsThreshold);

  if (applicableFee == null) {
    return 0;
  }

  const charge = (applicableFee.applicationType === FeeApplicationType.Percentage) ?
    (currentBalance * applicableFee.value) :
    applicableFee.value;
    
  return (charge <= applicableFee.maximumCharge) ? charge : applicableFee.maximumCharge;
}