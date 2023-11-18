import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/api/account.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  swaggerUrl = environment.swaggerUrl;
  loginForm: FormGroup = new FormGroup({});

  constructor(private accountService: AccountService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router
    ) {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.accountService.login(this.loginForm.value).subscribe({
      next: response => {
        console.log(response);
        this.router.navigateByUrl('/');
      }
    });
  }
}
