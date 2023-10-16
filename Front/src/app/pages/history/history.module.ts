import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history/history.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    // routing
    HistoryRoutingModule,
    // shared module
    SharedModule,
  ],
  declarations: [HistoryComponent],
})
export class HistoryModule { }
