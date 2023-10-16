import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguesService } from './services/internal/langues.service';
import { SsrService } from './services/internal/ssr.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'MiniBank';

  constructor(private translateService: TranslateService, private langueService: LanguesService, private ssrService: SsrService) {
    const currentLang = this.langueService.getCurrentLangue();
    this.translateService.setDefaultLang(currentLang.id);
    this.translateService.use(currentLang.id);
  }
}
