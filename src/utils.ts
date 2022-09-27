import { ISafe, TransactionType } from './types'

export function savedAmount(safe: ISafe) {
  return safe.transactions.reduce((acc, t) => acc + t.amount, 0)
}

export function lastDepositDate(safe: ISafe) {
  return lastTransactionDate(safe, TransactionType.Deposit);
}

export function lastWithdrawalDate(safe: ISafe) {
  return lastTransactionDate(safe, TransactionType.Withdrawal);
}

function lastTransactionDate(safe: ISafe, transactionType: TransactionType) {
  const transactionByType = safe.transactions.filter(t => t.type === transactionType)
  return Math.max(...transactionByType.map(t => {
    console.log("T.date type is " + t.date);
    return t.date.getDate();
  }));
}
