import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguesService } from './services/internal/langues.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'Portfolio';

  constructor(private translateService: TranslateService, private langueService: LanguesService) {
    const currentLang = this.langueService.getCurrentLangue();
    this.translateService.setDefaultLang(currentLang.id);
    this.translateService.use(currentLang.id);
  }
}
