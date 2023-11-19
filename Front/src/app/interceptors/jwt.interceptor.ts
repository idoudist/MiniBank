import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AccountService } from '../services/api/account.service';
import { User } from '../models/dtos/user.model';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser: User ;
    // the take 1 will make the observable work like a promise
    this.accountService.currentUser$.pipe(take(1)).subscribe( {
      next: (user: User) => {
        currentUser = user;
        if(currentUser){
          request = request.clone({
            setHeaders: {
              // the space ' ' after Bearer is very important dont miss it
              Authorization:`Bearer ${currentUser.token}`
            }
          });
        }
      },
      error: error => {
        this.toastr.error(error.error);
      }
    })

    return next.handle(request);
  }
}
