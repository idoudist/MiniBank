import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction/transaction.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    // routing
    TransactionRoutingModule,
    // shared module
    SharedModule,
  ],
  declarations: [TransactionComponent],
})
export class TransactionModule { }
