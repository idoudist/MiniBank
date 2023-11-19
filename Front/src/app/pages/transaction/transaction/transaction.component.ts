import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TransactionService } from 'src/app/services/api/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  depositForm: FormGroup = new FormGroup({});
  withdrowForm: FormGroup = new FormGroup({});

  constructor(private transactionService: TransactionService, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initializeDepositForm();
    this.initializeWithdrowForm();
  }

  initializeDepositForm() {
    this.depositForm = this.fb.group({
      amount: [0, [Validators.required, Validators.min(1)]],
    });
  }

  initializeWithdrowForm() {
    this.withdrowForm = this.fb.group({
      amount: [0, [Validators.required, Validators.min(1)]],
    });
  }

  deposit(){
    this.transactionService.deposit(this.depositForm.value).subscribe( {
      next: response => {
        this.toastr.success('operation successful')
      },
      error: error => {
        this.toastr.error(error.error)
      }
    }
    );
    this.depositForm.reset();
  }

  withdrow(){
    this.transactionService.withdrow(this.withdrowForm.value).subscribe({
      next: response => {
        this.toastr.success('operation successful')
      },
      error: error => {
        this.toastr.error(error.error);
      }
    });
    this.withdrowForm.reset();
  }

}
