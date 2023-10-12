import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/services/api/home.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  private getHomeSlidesSubscription: Subscription = new Subscription();

  constructor(private homeService: HomeService) {}

}
