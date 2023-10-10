import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { APP_DATA } from 'src/app/constants/App.constant';
import { ProfileNameHolder, SiteNameHolder } from 'src/app/constants/regex.constant';
import { META_DATA } from 'src/app/constants/seo.constant';
import { MetaConfig } from 'src/app/models/common/meta-config.model';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private metaService: Meta, private titleService: Title) {}

  setPageSeoData(config: MetaConfig): void {
    this.generateMetaTags(config);
    this.setPageTitle(config.title);
  }

  generateMetaTags(config: MetaConfig): void {
    // meta data name tags
    this.metaService.updateTag({
      name: META_DATA.title,
      content: config.title.replace(SiteNameHolder, APP_DATA.name),
    });
    this.metaService.updateTag({
      name: META_DATA.description,
      content: config.description.replace(ProfileNameHolder, APP_DATA.name),
    });
    // meta data property tags
    this.metaService.updateTag({
      property: META_DATA.ogTitle,
      content: config.title.replace(SiteNameHolder, APP_DATA.name) ,
    });
    this.metaService.updateTag({
      property: META_DATA.ogUrl,
      content: config.url,
    });
    this.metaService.updateTag({
      property: META_DATA.ogDescription,
      content: config.description.replace(ProfileNameHolder, APP_DATA.name) ,
    });
    this.metaService.updateTag({
      property: META_DATA.ogCountryName,
      content: APP_DATA.country,
    });
    this.metaService.updateTag({
      property: META_DATA.ogSiteName,
      content: APP_DATA.name,
    });
    this.metaService.updateTag({
      property: META_DATA.ogType,
      content: config.type,
    });
    this.metaService.updateTag({
      property: META_DATA.ogImage,
      content: APP_DATA.logo,
    });
  }

  setPageTitle(title: string): void {
    this.titleService.setTitle(title.replace(SiteNameHolder, APP_DATA.name));
  }
}
