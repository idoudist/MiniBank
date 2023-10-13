export class TransactionParams {
  pageNumber: number;
  pageSize: number;

  constructor(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.pageSize = 10;
  }
}
