import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        TranslateModule,
        PaginationModule.forRoot(),
        ReactiveFormsModule
    ],
    declarations: [

    ],
    exports: [
        CommonModule,
        FormsModule,
        NgbModule,
        TranslateModule,
        PaginationModule,
        ReactiveFormsModule
    ]
})

export class SharedModule {
}
