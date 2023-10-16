import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { DefaultLang } from 'src/app/constants/langues.constant';
import { LocalStorage } from 'src/app/constants/storage.constant';
import { Langue } from 'src/app/models/common/langue';
import { SsrService } from './ssr.service';

@Injectable({
  providedIn: 'root'
})
export class LanguesService {

  constructor(@Inject(DOCUMENT) private document: Document, private ssrService: SsrService) { }

  getCurrentLangue(): Langue {
    // langue
    if (this.ssrService.isOnBrowser()) {
      const currentLangueJson = localStorage.getItem(LocalStorage.Lang) || JSON.stringify(DefaultLang);
      localStorage.setItem(LocalStorage.Lang, currentLangueJson);
      const currentLang = JSON.parse(currentLangueJson) || DefaultLang;
      this.document.documentElement.lang = currentLang.id;
      localStorage.setItem(LocalStorage.Lang, JSON.stringify(currentLang));
      return currentLang;
    }
    return DefaultLang;
  }

  setCurrentLangue(lang: Langue): void {
    if (this.ssrService.isOnBrowser()) {
      localStorage.setItem(LocalStorage.Lang, JSON.stringify(lang));
      window.location.reload();
    }

  }
}
