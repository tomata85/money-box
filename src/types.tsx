export interface ISafe {
  id: number,
  name: string,
  goalAmount: number,
  goalName: string,
  photoUrl: string
  transactions: ITransaction[]
}

export interface ITransaction {
  "id": number,
  "safeId": number,
  "amount": number,
  "type": TransactionType,
  "reason": string,
  "timestamp": number
}

export enum TransactionType {
  Deposit = 0,
  BonusDeposit = 1,
  Withdrawal = 2
}
