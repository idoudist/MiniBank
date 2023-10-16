import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then(
        (m) => m.HomeModule,
      ),
  },
  {
    path: 'transaction',
    loadChildren: () =>
      import('./transaction/transaction.module').then(
        (m) => m.TransactionModule,
      ),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./history/history.module').then(
        (m) => m.HistoryModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
