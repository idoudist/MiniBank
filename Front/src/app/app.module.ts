import { NgModule } from '@angular/core';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguesService } from './services/internal/langues.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SsrService } from './services/internal/ssr.service';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { SeoService } from './services/internal/seo.service';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services/internal/notification.service';

// AoT requires an exported function for factories
export const createTranslateLoader = (httpClient: HttpClient) : TranslateHttpLoader => {
  return new TranslateHttpLoader(httpClient, '/assets/i18n/', '.json');
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    // translation server side
    TransferHttpCacheModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient, TransferState],
      },
    }),
    // toaster
    ToastrModule.forRoot(),
  ],
  providers: [LanguesService, SsrService, SeoService, HttpClient, NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
