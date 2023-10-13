import { TransactionTypeEnum } from "../enums/transaction-type.enum";

export class Transaction {
  id: number;
  amount: number;
  date: Date;
  transactionType: TransactionTypeEnum;

  constructor() {
    this.id = 0;
    this.amount = 0;
    this.date = new Date();
    this.transactionType = TransactionTypeEnum.Other;
  }
}
