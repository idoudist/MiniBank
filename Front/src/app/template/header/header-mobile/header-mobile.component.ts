import { Component, OnInit } from '@angular/core';
import { Langues } from 'src/app/constants/langues.constant';
import { HEADER_ITEMS } from 'src/app/constants/layout.constant';
import { Langue } from 'src/app/models/common/langue';
import { LanguesService } from 'src/app/services/internal/langues.service';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {

  langues: Langue[] = Langues;
  currentLang: Langue = new Langue();
  selectedLangue = {};
  isMenuCollapsed = true;
  headerItems = HEADER_ITEMS;

  constructor(private langueService: LanguesService) {
  }

  ngOnInit(): void {
    this.currentLang = this.langueService.getCurrentLangue();
    const index = Langues.findIndex(x => x.id === this.currentLang.id);
    this.selectedLangue = this.langues[index].id;
  }

  changeLang(lang: Langue): void {
    this.langueService.setCurrentLangue(lang);
  }

}
