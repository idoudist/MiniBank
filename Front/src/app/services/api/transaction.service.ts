import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operation } from 'src/app/models/dtos/operation.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl = environment.hostUrl;
  constructor(private http: HttpClient) { }

  async deposit(operation: Operation) {
    const url = `${this.baseUrl}api/Transaction/deposit`;
    return this.http.post(url, operation);
  }

}
