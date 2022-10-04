import { ISafe, ITransaction, TransactionType } from './types'

export const BONUS_DEPOSIT_AMOUNT = 10;
export const BONUS_RESET_DAYS = 28;

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
  const lastTimestamp = Math.max(...transactionByType.map(t => t.timestamp));
  return new Date(lastTimestamp)
}

export function ToString(type: TransactionType) {
  const strings = {
    [TransactionType.Deposit]: 'הפקדה',
    [TransactionType.BonusDeposit]: 'הפקדת בונוס',
    [TransactionType.Withdrawal]: 'משיכה'
  }

  return strings[type];
}

export function needsBonusCountdownReset(newTran: ITransaction) {
  return (newTran.type === TransactionType.Withdrawal);
}

export function needsBonusDeposit(safe: ISafe, newTran: ITransaction) {
  return (newTran.type === TransactionType.Deposit) &&
        (safe.nextBonusTimestamp <= Date.now());
}

export function createBonusDepositFor(safe: ISafe) : ITransaction {
  return {
    safeId: safe.id,
    amount: BONUS_DEPOSIT_AMOUNT,
    type: TransactionType.BonusDeposit,
    reason: ToString(TransactionType.BonusDeposit),
    timestamp: Date.now()
  }
}

export function nextBonusTimestamp() {
  const date = new Date();
  date.setDate(date.getDate() + BONUS_RESET_DAYS);
  date.setHours(0,0,0,0);
  return date.valueOf();
}
