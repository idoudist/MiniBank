import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AccountService } from '../services/api/account.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const storedUser = localStorage.getItem('user');
    if (storedUser === null || storedUser === undefined) {
      console.log("no token")
    } else {
      const currentUser = JSON.parse(storedUser);
      request = request.clone({
        setHeaders: {
          // the space ' ' after Bearer is very important dont miss it
          Authorization:`Bearer ${currentUser.token}`
        }
      });
    }
    // the take 1 will make the observable work like a promise
    return next.handle(request);
  }
}
