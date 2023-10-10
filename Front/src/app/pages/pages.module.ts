import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        // routing
        PagesRoutingModule,
        // shared module
        SharedModule,
    ],
    declarations: [],
})

export class PagesModule {
}
