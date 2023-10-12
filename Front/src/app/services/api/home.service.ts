import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnLangue, FrLangue } from 'src/app/constants/langues.constant';
import { HOME_INFO_EN, HOME_INFO_FR, HOME_SLIDES } from 'src/app/data/home.data';
import { Home } from 'src/app/models/home.model';
import { LanguesService } from '../internal/langues.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private languesService: LanguesService) { }

  getHomeInformations(): Observable<Home> {
    const currentLang = this.languesService.getCurrentLangue();
    return new Observable( observer => {
      let homeInfo = new Home();
      switch (currentLang.id) {
        case EnLangue.id: {
          homeInfo = HOME_INFO_EN;
          break;
        }
        case FrLangue.id: {
          homeInfo = HOME_INFO_FR;
          break;
        }
      }
      observer.next(homeInfo);
    });
  }

}
