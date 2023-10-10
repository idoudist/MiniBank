import { Component, OnInit } from '@angular/core';
import { Langues } from 'src/app/constants/langues.constant';
import { HEADER_ITEMS } from 'src/app/constants/layout.constant';
import { Langue } from 'src/app/models/common/langue';
import { LanguesService } from 'src/app/services/internal/langues.service';

@Component({
  selector: 'app-header-web',
  templateUrl: './header-web.component.html',
  styleUrls: ['./header-web.component.scss']
})
export class HeaderWebComponent implements OnInit {

  langues: Langue[];
  currentLang: Langue = new Langue();
  selectedLangue = {};
  headerItems = HEADER_ITEMS;

  constructor(private langueService: LanguesService) {
    this.langues = Langues;
  }

  ngOnInit(): void {
    // set current language
    this.currentLang = this.langueService.getCurrentLangue();
    const index = Langues.findIndex(x => x.id === this.currentLang.id);
    this.selectedLangue = this.langues[index].id;
  }

  changeLang(lang: Langue): void {
    this.langueService.setCurrentLangue(lang);
  }

}

