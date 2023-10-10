import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/services/api/home.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit, OnDestroy {
  private getHomeSlidesSubscription: Subscription = new Subscription();
  slides: any[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getHomeSlidesSubscription = this.homeService
      .getHomeSlides()
      .subscribe((data) => {
        this.slides = data;
      });
  }

  ngOnDestroy(): void {
    this.getHomeSlidesSubscription.unsubscribe();
  }
}
