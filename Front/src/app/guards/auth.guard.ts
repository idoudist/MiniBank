import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, filter, map, Observable, of } from 'rxjs';
import { User } from '../models/dtos/user.model';
import { AccountService } from '../services/api/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService, private toastr: ToastrService, private router: Router) {

  }
  canActivate(): Observable<boolean> | boolean {
    const storedUser = localStorage.getItem('user');
    if (storedUser === null || storedUser === undefined) {
      this.toastr.error('you do not have required permission!');
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

}
