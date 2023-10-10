import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { HeaderWebComponent } from './header/header-web/header-web.component';
import { HeaderMobileComponent } from './header/header-mobile/header-mobile.component';

@NgModule({
  imports: [
    // layout module
    LayoutRoutingModule,
    // shared module
    SharedModule,
    // for layout components
    NgSelectModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HeaderWebComponent,
    HeaderMobileComponent,
  ],
  providers: [
  ]
})

export class LayoutModule {
}
