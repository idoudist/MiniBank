import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/api/account.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  constructor(public accountService: AccountService, private router: Router) { }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/login');
  }

}
