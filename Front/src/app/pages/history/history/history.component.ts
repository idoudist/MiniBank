import { Component, OnInit } from '@angular/core';
import { PaginatedResult, Pagination } from 'src/app/helpers/pagination/pagination';
import { Transaction } from 'src/app/models/dtos/transaction.model';
import { TransactionService } from 'src/app/services/api/transaction.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  transactions: PaginatedResult<Transaction[]> = new PaginatedResult();
  balance: number = 0;
  //pagination variables
  pageNumber = 1;
  pageSize = 10;
  pagination: Pagination = {} as Pagination;

  constructor(public transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getBalance();
    this.getTransactions();
  }

  getBalance(){
    this.transactionService.getBalance().subscribe(res => this.balance = res);
  }

  getTransactions() {
    this.transactionService.getTransactions(this.pageNumber, this.pageSize).subscribe(res => {
      this.transactions = res;
      this.pagination = res.pagination || {} as Pagination;
    });
  }

  pageChanged(event: any) {
    this.pageNumber = event.page;
    this.getTransactions();
  }

}
