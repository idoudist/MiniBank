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
  //pagination variables
  pageNumber = 1;
  pageSize = 5;
  pagination: Pagination = {} as Pagination;

  constructor(public transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getTransactions(1, 10);
  }

  getTransactions(pageNumber: number, pageSize: number){
    this.transactionService.getTransactions(pageNumber, pageSize).subscribe(res => this.transactions = res);
  }

}
