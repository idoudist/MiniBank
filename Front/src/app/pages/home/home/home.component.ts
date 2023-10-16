import { Component, OnInit } from '@angular/core';
import { HOME_META_DATA } from 'src/app/constants/seo.constant';
import { SeoService } from 'src/app/services/internal/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.seoService.setPageSeoData(HOME_META_DATA);
  }

}
