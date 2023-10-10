import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Home } from 'src/app/models/home.model';
import { HomeService } from 'src/app/services/api/home.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  private getHomeInformationSubscription: Subscription = new Subscription();
  homeInfo: Home = new Home();

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getHomeInformationSubscription = this.homeService.getHomeInformations().subscribe(data => {
      this.homeInfo = data;
    });
  }
  ngOnDestroy(): void {
    this.getHomeInformationSubscription.unsubscribe();
  }

}
