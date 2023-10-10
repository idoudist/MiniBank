import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { DetailsComponent } from './details/details.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeService } from 'src/app/services/api/home.service';


@NgModule({
    imports: [
        // routing
        HomeRoutingModule,
        // shared module
        SharedModule,
        MDBBootstrapModule.forRoot()
    ],
    declarations: [
        HomeComponent,
        IntroComponent,
        DetailsComponent,
    ],
    providers: [
        HomeService,
    ]
})

export class HomeModule {
}
