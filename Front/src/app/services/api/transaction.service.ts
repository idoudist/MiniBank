import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedResult } from 'src/app/helpers/pagination/pagination';
import { getPaginationHeaders, getPaginatedResults } from 'src/app/helpers/pagination/pagination.helper';
import { Operation } from 'src/app/models/dtos/operation.model';
import { Transaction } from 'src/app/models/dtos/transaction.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl = environment.hostUrl + 'api/Transaction/';
  memberCache = new Map();
  constructor(private http: HttpClient) { }

  deposit(operation: Operation) {
    const url = `${this.baseUrl}deposit`;
    return this.http.post(url, operation);
  }

  withdrow(operation: Operation) {
    const url = `${this.baseUrl}withdrow`;
    return this.http.post(url, operation);
  }

  getTransactions(pageNumber: number, pageSize: number): Observable<PaginatedResult<Transaction[]>> {
    let params = getPaginationHeaders(pageNumber, pageSize);
    const url = `${this.baseUrl}transactions`;
    return getPaginatedResults<Transaction[]>(url, params, this.http);
  }

  getTransaction(id: number): Observable<Transaction> {
    const url = `${this.baseUrl}transaction/${id}`;
    return this.http.get<Transaction>(url);
  }

  getBalance(): Observable<number> {
    const url = `${this.baseUrl}balance`;
    return this.http.get<number>(url);
  }

}
